# Project Title: AnnaSetu — Freedom from Hunger

**Hackathon Project — Independence Day Special (2025)**  

AnnaSetu is a web platform fighting **food wastage in India**.  
Hotels, canteens, and communities can log waste, view analytics, and generate **shareable awareness messages** to inspire citizens to reduce food waste and feed the hungry.

## 🚩 Problem Statement
**Rising Food Wastage in Urban Areas**  
Hotels, canteens, and events throw away large quantities of edible food daily while many still go hungry.

## 💡 Proposed Solution — AnnaSetu
AnnaSetu provides a web-based platform to **track, analyze, and reduce food wastage** while raising national awareness.  

### Key Features:
- 📊 **Analytics Dashboard**  
  Track daily and monthly food wastage trends per hotel, region, or nationwide. Visual charts make data easy to understand.  

- 🥘 **Log Waste**  
  Hotels, canteens, and events can quickly enter the amount of food wasted and meals served.  

- 📈 **Trends & Insights**  
  Weekly/monthly charts and summaries show patterns, helping hotels make data-driven decisions to reduce waste.  

- 🤖 **AI Insights (Future Scope)**  
  Predict future wastage and provide personalized recommendations for hotels to save food and reduce environmental impact.  

- 📢 **Daily Awareness Messages**  
  Generate shareable messages (like SMS or WhatsApp cards) for citizens, e.g.:  
  > “India wasted 120,000 meals today — enough to feed the city of Kochi. Let’s pledge to reduce food waste 🇮🇳”

- ⚡ **Demo Mode**  
  Judges can instantly see the app in action without logging in.

## 👥 Team Members
- Abel Mathew George  
- Navaneeth Jayakumar

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abelmg-dev/AnnaSetu.git
   cd AnnaSetu
2. Install dependencies

npm install

3. Run the development server

npm start

This creates an optimized production build in the build/ folder

## 🛠 Usage Instructions

Follow these steps to use **AnnaSetu**:

1. **Open the Web App**  
   👉 [Live Demo Link](https://abelmg-dev.github.io/AnnaSetu/)  
   *(No installation required — works in browser)*

2. **Log Food Waste**  
   - Go to the **"Add Entry"** section.  
   - Enter:
     - Hotel / Canteen Name
     - State
     - Meals Served  
     - Meals Wasted  
     - Type of food
   - Click **Submit log** → data is saved in Firebase.  

3. **View Analytics**  
   - The dashboard instantly updates to show:  
     - ✅ Total meals wasted today  
     - ✅ % of meals wasted  
     - ✅ Number of families that could have been fed  
   - Trend chart shows **last 7 days of data**.  

4. **Awareness Message**  
   - As soon as you submit food waste data, the app **automatically generates a daily awareness message**.  
   - Example:  
     > *“Today India wasted food enough to feed 5,000 families. Let’s pledge to reduce wastage 🇮🇳”*  
   - You can **copy this message** and share via SMS/WhatsApp/Social Media.  

5. **Demo Mode (For Judges)**  
   - If you don’t want to type, just click **"Demo Mode"**.  
   - Sample data will auto-load → dashboard & charts will update instantly.  


## 🛠️ Try the Demo

Demo video link : https://drive.google.com/file/d/1PLgC-rQcnhmGYe7JAEPOztzMC7z6j1ux/view?usp=drivesdk

Explore **AnnaSetu** instantly using the hosted web app:  
[🔗 Click here to open AnnaSetu](https://abelmg-dev.github.io/AnnaSetu/)

- Log daily food waste for hotels/canteens  
- View **Analytics Dashboard** with trends & charts  
- Generate **Daily Awareness Messages** ready to share  
- No login required — demo is ready for judges to explore

## 👥 Team & Contributions

**Team Name:** **AetherOps**

- **Abel Mathew George**  
  - Project ideation & theme alignment with Independence Day spirit  
  - Frontend design (HTML, CSS, UI/UX styling)  
  - Firebase setup & integration  
  - GitHub repo creation & deployment via GitHub Pages  
  - Documentation (README & hackathon submission)  

- **Navaneeth Jayakumar**  
  - Backend logic (JavaScript functionality, data flow)  
  - Firestore database structure (wasteLogs collection setup)  
  - Analytics & Dashboard (Chart.js integration, percentage calculations)  
  - Awareness message auto-generation feature  
  - Testing & debugging of the prototype  

## 📜 License
This project is licensed under the **MIT License**.  

You are free to use, modify, and distribute this software for educational or personal purposes, provided proper credit is given to the authors.  

MIT License

Copyright (c) 2025 Abel Mathew George, Navaneeth Jayakumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


