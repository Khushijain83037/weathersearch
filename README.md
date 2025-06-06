
# 🌦️ Weather App

A full-stack weather forecast application that provides real-time weather updates using the [WeatherAPI.com](https://www.weatherapi.com/) service. Built with React on the frontend and Node.js with Express on the backend.

🔗 **Live Demo**: [https://weatherapp-c.netlify.app/](https://weatherapp-c.netlify.app/)  
📁 **GitHub Repository**: [https://github.com/Khushijain83037/weathersearch](https://github.com/Khushijain83037/weathersearch)

---

## 📁 Project Structure

```
Weather/
├── client/        # Frontend - React with TailwindCSS
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── server/        # Backend - Node.js with Express
│   ├── routes/
│   ├── .env
│   ├── index.js
│   └── package.json
└── README.md      # Project Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js & npm installed
- API key from [WeatherAPI.com](https://www.weatherapi.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/Khushijain83037/weathersearch.git
cd Weather
```

### 2. Install Dependencies

#### Frontend
```bash
cd client
npm install
```

#### Backend
```bash
cd ../server
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the `server/` folder and add your WeatherAPI key:
```
WEATHER_API_KEY=your_weatherapi_key_here
```

### 4. Run the App

#### Backend
```bash
cd server
npm start
```

#### Frontend
Open a new terminal:
```bash
cd client
npm run dev
```

---

## ✨ Features

- 🌍 Real-time weather forecast using WeatherAPI
- 🔍 Search weather by city
- 📱 Responsive and clean UI (TailwindCSS)
- 🔁 Full-stack architecture with RESTful API integration

---

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **API**: [WeatherAPI.com](https://www.weatherapi.com/)

---

## 📦 Deployment

- **Frontend**: [Netlify](https://netlify.com/)
- **Backend**: Deploy on Render/Heroku or any Node-compatible service

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue to discuss improvements or features.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [WeatherAPI.com](https://www.weatherapi.com/)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [TailwindCSS](https://tailwindcss.com/)


---

## 🧪 Run the App Locally

Follow these steps to run both the frontend and backend locally:

### 🛠 Step-by-Step Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Khushijain83037/weathersearch.git
   cd weathersearch
   ```

2. **Set Up the Backend**
   ```bash
   cd server
   npm install
   ```

3. **Create `.env` File**
   Inside the `server` folder, create a `.env` file:
   ```
   WEATHER_API_KEY=your_weatherapi_key_here
   ```

4. **Start the Backend Server**
   ```bash
   npm start
   ```
   By default, it runs on [http://localhost:5000](http://localhost:5000)

5. **Set Up the Frontend**
   Open a new terminal:
   ```bash
   cd client
   npm install
   ```

6. **Start the Frontend**
   ```bash
   npm run dev
   ```
   It usually runs on [http://localhost:5173](http://localhost:5173)

