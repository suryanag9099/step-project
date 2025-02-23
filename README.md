# React Step Tracker

## 📌 Overview
This is a simple **React Step Tracker** application that helps users navigate through different steps, displaying messages at each stage. It also includes a counter to track the number of days from a given date.

## 🚀 Features
- Step-by-step navigation with **Previous** and **Next** buttons.
- Displays messages based on the current step.
- Toggle button to **open/close** the step tracker.
- **Date counter** that updates dynamically.
- Styled using **CSS** for a clean and modern UI.

## 🛠️ Technologies Used
- **React.js** (useState Hook for state management)
- **JavaScript (ES6+)**
- **CSS** for styling

## 📂 Project Structure
```
📦 react-step-tracker
 ┣ 📜 src/
 ┃ ┣ 📜 App.js  (Main Component)
 ┃ ┣ 📜 index.js (Entry point)
 ┣ 📜 public/
 ┣ 📜 package.json
 ┗ 📜 README.md
```

## 📸 Preview
![Step Tracker Preview](https://via.placeholder.com/800x400)  
*(Replace with actual screenshot)*

## ⚡ How to Run Locally
1. Clone this repository:
   ```sh
   git clone https://github.com/suryanag9099/react-step-tracker.git
   cd react-step-tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## 🔧 Usage
- Click on **Next** to move to the next step.
- Click on **Previous** to go back a step.
- Click **X (Close Button)** to toggle visibility.
- The **Date Counter** updates dynamically based on step count.

## 🐞 Known Issues & Fixes
- **Bug:** `handelpervious` and `handelnext` functions have unnecessary semicolons affecting execution.
  - **Fix:** Remove the semicolon after `if` conditions.
- **Bug:** `textcolor` should be `color` in button styles.
  - **Fix:** Change `textcolor: "#fff"` to `color: "#fff"`.

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**.

---
Made with ❤️ by [Your Name](https://github.com/suryanag9099)

