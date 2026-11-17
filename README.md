# StopWatch

A web-based stopwatch built with HTML, CSS, and vanilla JavaScript. It has a dark theme with a large digital display showing time as minutes, seconds, and hundredths of a second (`mm:ss:cs`), plus lap recording.

## Features

- Centered container on a black background with white text
- Time displayed in a `label` tag
- **Start** button begins the timer
- While running, Start turns into a red **Stop** button
- **Lap** button prepends a new list item with the current time
- After stopping, Lap becomes **Reset**, which clears the time and all laps
- Accurate timing using `performance.now()`

## User Stories Covered

1. A `div` with class `container`, centered on screen
2. Body with black background and white text
3. A label tag showing the time
4. Two buttons: Lap and Start
5. Start begins the stopwatch
6. Lap prepends a new list element with the current time
7. Start button changes to Stop with a red background while running
8. Lap button changes to Reset after stopping, which resets the stopwatch

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Project Structure

```
stopwatch/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone the project.
2. Keep all files in the same folder.
3. Open `index.html` in any modern browser.

## How to Use

1. Click **Start** to begin timing.
2. Click **Lap** to record the current time.
3. Click **Stop** to pause the stopwatch.
4. Click **Reset** to clear the time and laps.

## Author

Aditya Sharma
