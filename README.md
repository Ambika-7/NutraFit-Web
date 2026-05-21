# 🥗 NutraFit — Fitness & Nutrition Portal

NutraFit is a premium, fully responsive, modern web application designed to help users track their nutrition, check courses, sign up for customized diet plans, and get in touch with fitness experts. 

The project has been optimized into a **self-contained, high-performance architecture** where each page holds its own styles (CSS) and interactivity (JavaScript) in a single file for maximum portability and zero load latency.

---

## ✨ Features

- **📱 Fully Responsive Design:** Modern aesthetics featuring harmonized color palettes, elegant typography, fluid hover effects, and custom scrollbars.
- **🍎 Diet Calculator (`plan.html`):** Dynamically calculates and displays daily meal plan recommendations based on user input.
- **📝 Interactive Contact Form (`contact.html`):** Configured with Firebase Realtime Database for seamless, live message delivery.
- **👤 Registration Form (`signup.html`):** Custom styling with comprehensive user profiles, capturing metrics (age, height, weight, activity frequency) and generating offline portable data backups (`.txt` files).
- **📰 Blog System (`blog.html`):** A visually compelling editorial view detailing key dietary science (e.g. magnesium intake).
- **🔄 Auto-Commit Watcher (`autocommit.js`):** A zero-dependency developer script that watches your workspace and automatically commits and pushes your code changes to GitHub on save.

---

## 📂 Project Structure

```bash
PRJ1 ZIP FILE/
├── index.html          # Main landing page (fully self-contained, inlined CSS/JS)
├── plan.html           # Personalized Diet Plan page (fully self-contained)
├── blog.html           # Scientific Blog page (fully self-contained)
├── contact.html        # Interactive Contact Form with Live Firebase integration
├── signup.html         # User Registration Form (handles custom text backups)
├── autocommit.js       # Background Git watcher script (automatically commits & pushes saves)
├── inline-assets.js    # Developer utility compiler script to inline CSS & JS
├── assets/
│   └── images/         # Harmonies of background banners, icons, and illustrations
├── .gitignore          # Keeps the repository clean by ignoring workspace/OS temp files
└── README.md           # Beautiful documentation (this file)
```

---

## 🚀 How to Run the Project

### **Method 1: VS Code Live Server (Highly Recommended)**
This project is preconfigured to use the **Live Server** extension on **port `5501`**.
1. Open this project directory in VS Code.
2. Install the **"Live Server"** extension (by Ritwick Dey).
3. Open `index.html`, right-click inside the file, and select **"Open with Live Server"** (or click the **"Go Live"** button in your VS Code status bar).
4. The page will open at `http://127.0.0.1:5501/index.html`.

### **Method 2: Command Line (Node.js or Python)**
Open a terminal in the project directory and run one of the following:
* **NodeJS:** `npx serve -p 5501`
* **Python 3:** `python -m http.server 5501`

### **Method 3: Direct File Launch**
Simply **double-click** the `index.html` file in your File Explorer to open it directly in your browser.

---

## ⚡ Developer Workflow: Auto-Commits to GitHub

To ensure that your changes are saved and backed up on GitHub in real time as you edit the code, you can use the **Auto-Commit** watcher script.

### **How to Use:**
1. Open a terminal in the project folder.
2. Run the command:
   ```bash
   node autocommit.js
   ```
3. Keep the terminal running in the background.
4. **That's it!** Whenever you edit and save any file:
   - The watcher waits for **5 seconds** (so rapid saves are nicely bundled into a single commit).
   - Automatically stages the changes (`git add .`).
   - Automatically commits them with a list of the modified files.
   - Automatically pushes them directly to your GitHub repository!

---

## 🛠️ Technology Stack

- **Markup:** HTML5 (Semantic Structure)
- **Styling:** Custom CSS3 (Vanilla design, custom layouts, and media queries)
- **Logics:** JavaScript (Vanilla ES6+)
- **Database:** Firebase (Realtime Database Integration)