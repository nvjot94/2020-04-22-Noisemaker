import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import notification from "../assets/notification.mp3";
const Chart = props => {
  const { chartData, location, displayTitle, displayLegend, legendPosition } = props;

  const [audio] = useState(new Audio(notification));

  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  const click = e => {
    audio.play();
    toggle();
  };

  return (
    <div className='chart' onClick={click}>
      <Bar
        data={chartData}
        options={{
          title: {
            display: displayTitle,
            text: "Total Cases In " + location,
            fontSize: 25
          },
          legend: {
            display: displayLegend,
            position: legendPosition
          }
        }}
      />
      <Pie
        data={props.chartData}
        options={{
          title: {
            display: displayTitle,
            text: "Total Cases In " + location,
            fontSize: 25
          },
          legend: {
            display: displayLegend,
            position: legendPosition
          }
        }}
      />
    </div>
  );
};

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPosition: "right",
  location: "City"
};

export default Chart;
