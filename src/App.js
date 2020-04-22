import React, { useState } from "react";
import "./App.css";
import Chart from "./components/chart";
import notification from "./assets/notification.mp3";
const App = () => {
  const [audio] = useState(new Audio(notification));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  const click = e => {
    audio.play();
    toggle();
  };
  const [chartData] = useState({
    labels: ["Ontario", "British Columbia", "Quebec", "Alberta", "Manitoba", "Nova Scotia"],
    datasets: [
      {
        label: "Total Cases",
        data: [12245, 1724, 20126, 3095, 15255, 9772],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)"
        ]
      }
    ]
  });

  return (
    <div className='App'>
      <div className='App-header'>
        <a href='#!' onClick={click}>
          <h1 onClick={click}>Covid-19 Tracker</h1>
        </a>
      </div>
      <Chart chartData={chartData} location='Canada' legendPosition='bottom' />
    </div>
  );
};

export default App;
