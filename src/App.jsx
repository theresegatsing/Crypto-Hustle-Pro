import { useState, useEffect } from 'react'
import './App.css'
import CoinInfo from "./Components/CoinInfo.jsx"

const API_KEY = import.meta.env.VITE_APP_API_KEY

function App() {
  const [list, setList] = useState(null)
  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key" + API_KEY
      )
      const json = await response.json()
      setList(json)
    }
    fetchAllCoinData().catch(console.error)
  }, [])

  const searchItems = searchValue => {
    setSearchInput(searchValue)
    if (searchValue !== "" && list) {
      const filteredData = Object.entries(list.Data)
        .filter(([symbol, coinData]) =>
          coinData.FullName.toLowerCase().includes(searchValue.toLowerCase()) ||
          symbol.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map(([symbol]) => symbol) // just keep the coin symbols
      setFilteredResults(filteredData)
    } else if (list) {
      setFilteredResults(Object.keys(list.Data))
    }
  }


  /*const searchItems = searchValue => {
    setSearchInput(searchValue)
    if (searchValue !== "" ) {
      const filteredData = Object.keys(list.Data).filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(Object.keys(list.Data))
    }
  }*/

  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
      <input 
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
      <ul>
        {list &&
          Object.entries(list.Data)
            .filter(([_, coinData]) =>
              coinData.IsTrading &&
              coinData.Algorithm !== "N/A" &&
              coinData.ProofType !== "N/A"
            )
            .map(([coin, coinData]) => (
              <CoinInfo
                image={list.Data[coin].ImageUrl}
                name={list.Data[coin].FullName}
                symbol={list.Data[coin].Symbol}
              />
            ))}
      </ul>

      {/* ✅ Moved this JSX block inside the <div> to prevent top-level sibling error */}
      <ul>
        {searchInput.length > 0
          ? filteredResults.map((coin) => {
              const coinData = list.Data[coin]
              if (
                coinData.IsTrading &&
                coinData.Algorithm !== "N/A" &&
                coinData.ProofType !== "N/A"
              ) {
                return (
                  <CoinInfo
                    key={coin}
                    image={coinData.ImageUrl}
                    name={coinData.FullName}
                    symbol={coinData.Symbol}
                  />
                )
              }
              return null
            })
          : list &&
            Object.entries(list.Data)
              .filter(
                ([_, coinData]) =>
                  coinData.IsTrading &&
                  coinData.Algorithm !== "N/A" &&
                  coinData.ProofType !== "N/A"
              )
              .slice(0, 20)
              .map(([coin, coinData]) => (
                <CoinInfo
                  key={coin}
                  image={coinData.ImageUrl}
                  name={coinData.FullName}
                  symbol={coinData.Symbol}
                />
              
              ))
              }
      </ul>
    </div>
  )
}

export default App