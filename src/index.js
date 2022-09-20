import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

let products = [
  { id: 1, name: "Narcissus", value: 0 },
  { id: 2, name: "Orchid", value: 0 },
  { id: 3, name: "Periwinkle", value: 0 },
  { id: 4, name: "Calendula", value: 0 },
  { id: 5, name: "Bluebell", value: 0 },
  { id: 6, name: "Tulip", value: 0 },
  { id: 7, name: "Rosemary", value: 0 },
  { id: 8, name: "Iris", value: 0 },
  { id: 9, name: "Lavender", value: 0 },
  { id: 10, name: "Rose", value: 0 },
  { id: 11, name: "Geranium", value: 0 },
];

let data = localStorage.getItem("products");
if (data !== null) {
  data = JSON.parse(data);
  products = data;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App products={products}></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
