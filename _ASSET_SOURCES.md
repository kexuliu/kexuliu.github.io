# Cosmic background assets — local review

These assets are integrated for local visual review. No publication or deployment is authorized by this change.

## Black hole motion

- Selected reference: https://steamcommunity.com/sharedfiles/filedetails/?id=3334842322 (*Black hole*). Steam labels it as a 3840 × 2160 video, 26,169,782 bytes, but exposes only a 224 × 224 GIF preview outside Wallpaper Engine.
- Closely matched 4K source: https://motionbgs.com/black-hole2 (*Mysteries of the Black Hole*).
- Download: https://motionbgs.com/dl/4k/7003
- Inspected original: 3840 × 2160, 30 fps, 27.933 seconds, 28,406,031 bytes, H.264 video.
- Local outputs: `assets/cosmos/gargantua-4k.mp4` keeps the inspected 4K source; `gargantua-hd.mp4` is a 1920 × 1080 web derivative.
- `gargantua-poster.webp` is extracted from the 4K video at native resolution. `gargantua-mobile.webp` is its 1600 × 900 derivative. Neither image is upscaled or AI-generated.
- The matched source is visually very close to the chosen Steam wallpaper, but it is not presented as the same file. Revisit third-party reuse terms before any future publication.

## Steam Workshop reference

- 7man's *Realistic Interstellar Black Hole 4K*: https://steamcommunity.com/sharedfiles/filedetails/?id=2819268329
- Full preview: https://images.steamusercontent.com/ugc/1772749055094617717/31118A0BCCCA10D253FF8C3549930B4FA742F382/
- Inspected preview is 2560 × 1440. Workshop item is a Scene, not a directly downloadable MP4; its preview is not presented as the site's motion asset.

## Playback behavior

Only desktop homepage visits request a video. Narrow screens, reduced-motion preferences, Save-Data connections, and all other pages retain static imagery. Playback pauses in hidden tabs; autoplay rejection keeps the still image, and media errors retain the poster.

## Current visual revision

- The selected 4K motion source is now integrated; the former close-cropped black hole and separate Earth layer were removed so the accretion disk remains readable.
- Backgrounds now use a bounded 16:9 frame and `object-fit: contain`, with no negative horizontal offset or breakpoint-specific enlargement.
- The visible motion toggle is removed at the user's request. Reduced-motion, Save-Data, tab visibility and failed-playback fallbacks remain.
- The return spacecraft is fixed at bottom center on all viewport sizes.
