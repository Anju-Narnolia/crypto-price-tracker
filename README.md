# 📈 Real-Time Crypto Price Tracker

A responsive **React + Vite + TypeScript + Redux Toolkit** application that simulates real-time tracking of cryptocurrency prices. Inspired by platforms like CoinMarketCap, this app demonstrates dynamic data updates and centralized state management using Redux.

---

## 🎯 Objective

Build a real-time crypto price tracker that:

- Displays 5 crypto assets (BTC, ETH, USDT, etc.) in a table.
- Simulates WebSocket updates using `setInterval`.
- Uses Redux Toolkit to manage all state.
- Makes the UI responsive and color-coded for price changes.

---

## 🛠️ Tech Stack

- **React** – Frontend framework
- **Vite** – Build tool for fast development
- **TypeScript** – For type-safe coding
- **Redux Toolkit** – State management
- **Tailwind CSS**- For Styling
- **Mock WebSocket** – Simulated via `setInterval`
- **Static Chart** – 7D chart using image

---

## 📊 Features

- 🧠 **Redux-Only State**: All crypto data is stored and updated via Redux state.
- 🔄 **Simulated Live Updates**: Every 1–2 seconds, price, % change, and 24h volume are updated.
- 🎨 **Color-Coded Changes**: Positive changes are shown in green, negative in red.
- 📱 **Responsive Table**: Viewable on all screen sizes.
- 📉 **Static 7D Chart**: Representing weekly trends.

---

### 🔁 State Flow

1. Initial crypto data is loaded into Redux.
2. A mock WebSocket (via `setInterval`) randomly updates prices and volumes.
3. Updates are dispatched through Redux actions.
4. The UI listens to the Redux store via selectors and re-renders on change.

---

## 🖥️ UI Table Structure

| # | Logo | Name | Symbol | Price | 1h % | 24h % | 7d % | Market Cap | 24h Volume | Circulating Supply | Max Supply | 7D Chart |
|---|------|------|--------|-------|------|-------|------|-------------|-------------|----------------------|-------------|----------|

---

## 📁 Getting Started

### 1. Clone the Repo
git clone https://github.com/your-username/crypto-tracker.git 

cd crypto-tracker
### 2. Install Dependencies
npm install
### 3. Start Development Server
npm run dev
