# 🫧 Bubble Game

A fast-paced, browser-based number-matching game where you race against the clock to pop the right bubbles!

🔗 **Live Demo:** https://aditya90569056.github.io/bubble-game/

---

## 🎮 How to Play

1. Open the game and click **Play Now** on the landing page.
2. A **target number** is displayed at the top of the screen (labeled *Hit*).
3. A grid of bubbles, each showing a random number (0–9), fills the screen.
4. **Click the bubble** that matches the target number.
5. Each correct hit:
   - Adds **10 points** to your score.
   - Refreshes all the bubbles with new random numbers.
   - Sets a new target number.
6. You have **60 seconds** — score as high as you can!

---

## ✨ Features

- 🕹️ **Reflex-based gameplay** — click bubbles as fast as possible to maximize your score.
- 🔢 **Math & pattern recognition** — great for improving number recognition speed.
- 🔊 **Audio feedback** — a sound plays on every bubble click.
- ⏱️ **60-second countdown timer** — game ends automatically when time runs out.
- 🌀 **Smooth landing page** — animated intro built with GSAP and Locomotive Scroll.
- 📱 **Responsive design** — works on desktop, tablet, and mobile.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| JavaScript (Vanilla) | Game logic |
| [GSAP 3](https://greensock.com/gsap/) | Landing page animations |
| [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) | Smooth scrolling on landing page |
| Web Audio API | In-game sound effects |

---

## 📁 Project Structure

```
bubble-game/
├── index.html       # Landing / intro page
├── index2.html      # Game page
├── style.css        # Styles for the game page
├── style2.css       # Styles for the landing page
├── script.js        # Landing page animations (GSAP + Locomotive Scroll)
├── logic.js         # Core game logic (bubbles, timer, scoring)
├── sound.wav        # Click sound effect
└── README.md
```

---

## 🚀 Getting Started

No build tools or dependencies required — just open the files in a browser.

### Run locally

```bash
# Clone the repository
git clone https://github.com/aditya90569056/bubble-game.git

# Open the landing page in your browser
open index.html
```

Or serve with any static file server, for example:

```bash
npx serve .
```

Then visit `http://localhost:3000` in your browser.

---

## 👩‍💻 Credits

Developed by **Aditya** with contributions from:
- Shakshi Bhandari
- Vandana Yadav
- Srishti Chauhan
