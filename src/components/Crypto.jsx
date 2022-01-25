import React, { useState, useEffect } from "react";
import BackToTop from "./BackToTop";
import "./Crypto.css";

const Crypto = () => {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR")
        .then((response) => {
          if (response.status !== 200) {
            console.log("error", response.status);
            return;
          }
          response.json().then((crypto) => {
            setCrypto(crypto.coins);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <BackToTop />
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {crypto
        .filter((cryptos) => {
          return (
            cryptos.name.toLowerCase().includes(search.toLowerCase()) ||
            cryptos.symbol.toLowerCase().includes(search.toLowerCase())
          );
        })
        .map((cryptos, i) => (
          <div className="center" key={i}>
            <h2>{cryptos.name}</h2>
            <a href={cryptos.websiteUrl}>
              <img src={cryptos.icon} alt="logo" width="40px" />
            </a>
            <br />
            <br />
            <b className="symbol">{cryptos.symbol}</b>
            <br />
            <br />
            <b>Price:</b> ${cryptos.price.toFixed(4)}
            <br />
            <b> Market Cap:</b> ${cryptos.marketCap.toLocaleString()}
            {cryptos.priceChange1d < 0 ? (
              <p className="red">
                <b>24H Change: </b>
                {cryptos.priceChange1d}%
              </p>
            ) : (
              <p className="green">
                <b>24H Change: </b>
                {cryptos.priceChange1d}%
              </p>
            )}
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Crypto;
