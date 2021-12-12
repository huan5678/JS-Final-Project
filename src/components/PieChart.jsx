import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  devicePixelRatio: 1,
  width: "60%",
  height: "60%",
  plugins: {
    decimation: {
      enabled: true,
    },
    legend: {
      position: "bottom",
      labels: {
        padding: 16,
        pointStyle: "rect",
        usePointStyle: true,
      },
    },
    datalabels: {
      labels: {
        value: {
          align: "bottom",
          backgroundColor: function (ctx) {
            return ctx.dataset.backgroundColor;
          },
          borderColor: "white",
          borderWidth: 2,
          borderRadius: 4,
          color: "#F8F8F8",
          formatter: function (value, ctx) {
            let datasets = ctx.chart.data.datasets;
            let sum = datasets[0].data.reduce((a, b) => a + b, 0);
            return ctx.active
              ? Math.round(value * 1000) / 1000
              : `${Math.round((value / sum) * 100)} %`;
          },
          padding: 4,
        },
        name: {
          align: "top",
          color: "#F8F8F8",
          padding: 4,
          font: { size: 24 },
          formatter: function (value, ctx) {
            return ctx.chart.data.labels[ctx.dataIndex];
          },
        },
      },
    },
  },
};


const PieChart = ({ pieData }) => {


  const data = {
    labels: pieData.labels,
    datasets: [
      {
        data: pieData.data,
        backgroundColor: ["#DACBFFE6", "#9D7FEAE6", "#5434A7E6", "#301E5FE6"],
        borderColor: ["#DACBFF", "#9D7FEA", "#5434A7", "#301E5F"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie data={data} options={options} plugins={[ChartDataLabels]} />
  );
};



export default PieChart;
