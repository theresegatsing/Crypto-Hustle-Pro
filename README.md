# 💰 Crypto Hustle Lite

This project is the result of a lab where I built a cryptocurrency tracking app using React. The app fetches real-time data from the CryptoCompare API and allows users to view key information about various cryptocurrencies. I also implemented a search feature so users can look up coins by their symbol.

## 🚀 What I Built

- A **React app** that fetches data from the [CryptoCompare API](https://min-api.cryptocompare.com/data/all/coinlist).
- A list of **at least 30 cryptocurrencies**, each showing:
  - The **coin’s image**
  - Its **name**
  - Its **price in USD**
- A **search bar** that lets users search for a specific cryptocurrency by its symbol (e.g., BTC, ETH).
- (Optional) Setup for extending the app to include a pane for viewing known **crypto scams** using CryptoScamDB.

## 🔑 Key Features

- 🌐 **API Integration** — I created an API key and used it to fetch data securely.
- 🔁 **`useEffect` Hook** — Used to fetch data on component mount.
- 🔍 **Search Functionality** — Filtered the coin list based on user input using dynamic rendering.
- ⚛️ **Reusable Components** — Built a `CoinInfo` component to display coin-specific details via `props`.
- 🎨 **Custom Styling** — Applied CSS to make the app visually clean and responsive.

## 🧠 What I Learned

- How to create and use an **API key** and connect to third-party APIs.
- How to read **API documentation** and understand query parameters and response formats.
- How to use **`useEffect`** and **`useState`** hooks to manage component state in React.
- How to fetch and handle **asynchronous data** with `async/await`.
- How to write **conditional rendering** in JSX to handle things like loading states and search results.
- How to pass data using **props** and reuse components in a clean and organized way.
- How to design with **CSS** to structure the layout and make the UI more readable.

## 📸 Screenshots

![Crypto App Screenshot](./"crypto screenshot.png")

