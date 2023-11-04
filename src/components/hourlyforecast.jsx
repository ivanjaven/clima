import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const HourlyForecast = () => {
  const DATA_COUNT = 12;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const datapoints = [
    0,
    20,
    20,
    60,
    60,
    120,
    NaN,
    180,
    120,
    125,
    105,
    110,
    170,
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Cubic interpolation (monotone)",
        data: datapoints,
        // borderColor: Utils.CHART_COLORS.red,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
      {
        label: "Cubic interpolation",
        data: datapoints,
        // borderColor: blue,
        fill: false,
        tension: 0.4,
      },
      {
        label: "Linear interpolation (default)",
        data: datapoints,
        // borderColor: green,
        fill: false,
      },
    ],
  };
  const options = {
    type: "line",
    data: data,
    options: {
      responsive: false,
      plugins: {
        title: {
          display: true,
          text: "Chart.js Line Chart - Cubic interpolation mode",
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
          },
          suggestedMin: -10,
          suggestedMax: 200,
        },
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default HourlyForecast;
