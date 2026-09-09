(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktop = window.matchMedia("(min-width: 768px)");
  const home = document.body.classList.contains("home-page");
  const scriptURL = document.currentScript.src;
  // Quarto places body includes inside its content grid. Lift fixed layers out
  // so they cannot cover unpositioned article text or sit beneath the footer.
  const backdrop = document.querySelector(".cosmos");
  if (backdrop) document.body.prepend(backdrop);
  for (const control of document.querySelectorAll(".return-flight")) {
    document.body.append(control);
  }
  document.body.classList.toggle("cosmos-landing", !!document.querySelector(".section-intro"));
  const video = document.querySelector(".cosmos-video");
  const connection = navigator.connection;
  let playbackFailed = false;
  let sourceLoaded = false;
  let wantsPlayback = false;

  const updatePlayback = () => {
    if (!video) return;
    const enabled = home && desktop.matches && !reducedMotion.matches && !connection?.saveData && !playbackFailed;
    wantsPlayback = enabled && !document.hidden;
    if (!enabled) document.body.classList.remove("cosmos-playing");
    if (!wantsPlayback) {
      video.pause();
      return;
    }
    if (!sourceLoaded) {
      // Only eligible homepage visits request motion media; static pages never do.
      const width = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
      video.src = new URL(width > 2400 ? "cosmos/gargantua-4k.mp4" : "cosmos/gargantua-hd.mp4", scriptURL).href;
      video.muted = true;
      sourceLoaded = true;
    }
    const attempt = video.play();
    attempt?.catch((error) => {
      if (error.name === "AbortError" || !wantsPlayback) return;
      // Keep the full-resolution still when autoplay is unavailable.
      playbackFailed = true;
      updatePlayback();
    });
  };

  video?.addEventListener("playing", () => {
    if (!wantsPlayback) {
      video.pause();
      return;
    }
    document.body.classList.add("cosmos-playing");
  });
  video?.addEventListener("error", () => {
    playbackFailed = true;
    document.body.classList.remove("cosmos-playing");
    updatePlayback();
  });
  reducedMotion.addEventListener("change", updatePlayback);
  desktop.addEventListener("change", updatePlayback);
  connection?.addEventListener("change", updatePlayback);
  document.addEventListener("visibilitychange", updatePlayback);
  updatePlayback();

  const flight = document.querySelector(".return-flight");
  const top = document.getElementById("page-top");
  let frame = 0;
  let launchTimer = 0;
  let launchPending = false;
  let focusPending = false;

  const updateFlight = () => {
    frame = 0;
    if (!flight) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const threshold = Math.min(window.innerHeight * 0.75, Math.max(120, maxScroll - 8));
    flight.hidden = !launchPending && (maxScroll < 120 || window.scrollY < threshold);
    if (focusPending && window.scrollY <= 2) {
      focusPending = false;
      top?.focus({ preventScroll: true });
    }
  };
  const scheduleFlight = () => {
    if (!frame) frame = requestAnimationFrame(updateFlight);
  };
  window.addEventListener("scroll", scheduleFlight, { passive: true });
  window.addEventListener("resize", scheduleFlight, { passive: true });
  if (window.ResizeObserver) new ResizeObserver(scheduleFlight).observe(document.body);
  flight?.addEventListener("click", () => {
    window.clearTimeout(launchTimer);
    focusPending = true;
    launchPending = !reducedMotion.matches;
    flight.classList.toggle("is-launching", launchPending);
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "instant" : "smooth" });
    launchTimer = window.setTimeout(() => {
      launchPending = false;
      flight.classList.remove("is-launching");
      updateFlight();
    }, reducedMotion.matches ? 0 : 420);
  });
  window.addEventListener("wheel", () => { focusPending = false; }, { passive: true });
  window.addEventListener("touchstart", () => { focusPending = false; }, { passive: true });
  updateFlight();
})();
