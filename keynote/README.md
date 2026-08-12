# 10 Year Dream Keynote — Kevin Hernandez

**Submit this file:** `Kevin-Hernandez-10-Year-Dream-Keynote.pdf`

5 slides, 16:9 widescreen, built to be shown full-screen.

## Adding photos

The deck is finished except for the pictures. Every photo slot is currently a
labelled grey frame telling you what goes there.

1. Put your images in the `photos/` folder using the exact file names listed in
   `photos/README.txt` (`kevin.jpg`, `miami.jpg`, `barcelona.jpg`, and so on).
2. Run `npm install` once, then `npm run build`.
3. The PDF rebuilds with your photos in place.

Any photo you skip simply stays as a grey frame, so you can add them a few at a
time. Photos of you and your own family/dog/friends will look far more real than
stock images — use those where you can.

For the places you can't photograph yourself (Miami skyline, Barcelona, a
college campus), free-to-use photos are at
[unsplash.com](https://unsplash.com) and [pexels.com](https://pexels.com) —
search the place name, download, rename, drop in.

## Editing the words

All the text lives in `deck.html` as plain sentences. Change anything that
doesn't sound like you, then run `npm run build` again.

## Files

| File | What it is |
| --- | --- |
| `Kevin-Hernandez-10-Year-Dream-Keynote.pdf` | The file you hand in |
| `deck.html` | The source — edit text and layout here |
| `photos/` | Drop your images here |
| `preview/` | PNG of each slide, for a quick look |
| `render.mjs` | Script that turns `deck.html` into the PDF |

## Design

Inter typeface · off-white `#F6F5F2` · near-black `#17191D` · muted blue accent
`#3F6189`. Page numbers run `01 / 05`.
