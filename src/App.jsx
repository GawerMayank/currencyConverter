// api:
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const getCurrency = async () => {
      const response = await fetch(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
      );
      const jsonData = await response.json();
      const currencyCode = Object.keys(jsonData).map((code) =>
        code.toUpperCase()
      );

      setCurrency(currencyCode);
    };
    getCurrency();
  }, []);

  const handleChange = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${from}`
      );
      const jsonData = await response.json();
      const exchangeRate = jsonData.rates[to];
      const converted = exchangeRate * parseFloat(amount);
      setConvertedAmount(converted.toFixed(2));
    } catch (error) {
      alert("Sorry! This conversion is not available");
    }
  };

  const exchange = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-green-50">
        <div className=" w-1/3 rounded p-10">
          <h1 className="text-green-700 text-4xl font-semibold p-2">
            Currency converter
          </h1>
          <div className=" flex flex-col space-y-2 p-2 my-2">
            <label htmlFor="from">From:</label>
            <select
              name="from"
              className="w-1/2"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              {currency.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <button onClick={exchange} className="w-fit">
              <img src="arrow.svg" alt="" className=" w-10" />
            </button>
            <label htmlFor="to">To:</label>
            <select
              name="to"
              className="w-1/2"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              {currency.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="bg-gray-100 border  rounded px-2 py-1 shadow-inner shadow-gray-500 w-1/2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div></div>
            <button
              className=" bg-green-700 rounded px-1 text-white text-xl w-1/4"
              onClick={handleChange}
            >
              Convert
            </button>
            <h2>Converted amount:</h2>
            <input
              type="text"
              disabled
              className="bg-gray-100 border  rounded px-2 py-1 shadow-inner shadow-gray-500 w-1/2"
              value={convertedAmount}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
