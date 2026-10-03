# For Kaior

A Boyfriend's Day surprise site. Plain HTML, CSS and JavaScript, no build step.

```
index.html
css/style.css
js/config.js      <- all the words, photos and songs live here
js/main.js
assets/images/    <- memory-1.jpg to memory-12.jpg
assets/audio/     <- raindance.mp3, superpowers.mp3, forever-ever.mp3
```

## Preview it on your computer

Double-click `index.html`. That's it.

The unlock date is `29/04/2025` (also accepts `29/4/2025`, `29-04-2025`, `29.04.2025`, `29042025`).

## Swap the photos

Drop your photos into `assets/images/` with exactly these names. Each one fills the matching card:

| File | Card |
| --- | --- |
| `assets/images/memory-1.jpg` | ITA Conference |
| `assets/images/memory-2.jpg` | Eating in the car together |
| `assets/images/memory-3.jpg` | The arcade |
| `assets/images/memory-4.jpg` | The Airbnb |
| `assets/images/memory-5.jpg` | Uhuru Park picnic |
| `assets/images/memory-6.jpg` | Uhuru Park bike riding |
| `assets/images/memory-7.jpg` | Taking me to pierce my ears |
| `assets/images/memory-8.jpg` | My first matatu ride with you |
| `assets/images/memory-9.jpg` | The Audi pics |
| `assets/images/memory-10.jpg` | Sneaking out in our parents' cars |
| `assets/images/memory-11.jpg` | Me, at your house, again |
| `assets/images/memory-12.jpg` | Our late night calls |

- `memory-1.jpg` to `memory-4.jpg` are placeholders right now. Overwrite them, keeping the same names.
- `memory-5.jpg` to `memory-12.jpg` don't exist yet. Until you add one, that card shows a fun emoji
  instead, so you only need photos for the memories you actually have photos of.
- No photo for one of the first four? Delete its placeholder file and it becomes an emoji card too.
- The names must end in `.jpg`. For a different name or file type, change the `image:` line of that
  card in `js/config.js`.

Portrait photos (taller than wide) fit the cards best. Try to keep each one under about 500 KB so the
site loads quickly on his phone.

## Add the songs

Put the files in `assets/audio/` with exactly these names (all lowercase, no spaces):

- `assets/audio/raindance.mp3`
- `assets/audio/superpowers.mp3`
- `assets/audio/forever-ever.mp3`

If a file is missing, the site still works and the player says "Add the audio file to hear this one".
Different file name? Change the `file:` line for that song in `js/config.js`.

## Change the words

Open `js/config.js` in any text editor. Everything is labelled:

| Section in config.js | What it changes |
| --- | --- |
| `anniversary` | The unlock date and every "days together" counter |
| `gate`, `loader`, `hero` | Lock screen, loading screen and top of the page |
| `story` | The timeline |
| `gallery` | Memory cards: title, date, caption, photo, emoji |
| `reasons` | The "Reasons I love you" cards |
| `songs` | Song title, artist, note and file |
| `letter` | **The love letter** (leave an empty line between paragraphs) |
| `surprise` | The button and the coupon |
| `footer` | The last line and the date |

Only change text between the quote marks, and keep the commas. If the page goes blank after an edit,
a quote mark or comma has gone missing near the last thing you changed.

The browser tab title ("For Kaior") is the one thing outside config.js: it's the `<title>` line near
the top of `index.html`.

## Deploy to Vercel through GitHub

1. Create a new **private** repository on github.com (no README, no .gitignore).
2. In this folder, run:

   ```bash
   git init
   git add .
   git commit -m "For Kaior"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. Go to vercel.com, sign in with GitHub, click **Add New > Project** and import the repository.
4. Framework preset: **Other**. Leave the build command and output directory empty. Click **Deploy**.
5. Send him the link Vercel gives you.

To update the site later: change files, then `git add . && git commit -m "update" && git push`.
Vercel redeploys on its own. No `vercel.json` is needed.

The repository is private, but the Vercel link works for anyone who has it. The page asks search
engines not to list it.
