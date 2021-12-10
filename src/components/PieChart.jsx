import { useEffect, useState} from 'preact/hooks';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import FetchData from "./FetchData";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  devicePixelRatio: 1,
  width: "60%",
  height: "60%",
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        padding: 16,
        pointStyle: "rect",
        usePointStyle: true,
      },
    },
    datalabels: {
      formatter: (value, ctx) => {
        let datasets = ctx.chart.data.datasets;

        if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
          let sum = datasets[0].data.reduce((a, b) => a + b, 0);
          let percentage = `${
            ctx.chart.data.labels[ctx.dataIndex]
          }:\n${Math.round((value / sum) * 100)} %`;
          return percentage;
        }
      },
      color: "#F8F8F8",
      font: { size: 24 },
      textStrokeColor: "hsla(257,53%,25%,.25)",
      textStrokeWidth: 2,
      textShadowBlur: 4,
      textShadowColor: "hsla(0, 0, 0, .25)",
    },
  },
};


const PieChart = ({ ordersList , pieFilter}) => {

  console.log("ordersList", ordersList);

  const [chartData, setChartData] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const list = FetchData({ target: "products" });
    list.then((res) => {
      let data = res.data.products;
      let categories = data.map((item) => item.category);
      let category = [...new Set(categories)];
      if (pieFilter === "全產品類別營收比重") {
        setCategories(category);
      }
    });
    if (pieFilter !== "全產品類別營收比重") {
      let itemFilter = ordersList
        .filter((item) => item.paid == true)
        .map((item) => item.products.map((item) => item.title));
      let itemArr = [];
      itemFilter = itemFilter.map((item) => itemArr.push(...item));
      let result = itemArr.reduce((obj, item) => {
        obj[item] = obj[item] ? obj[item] + 1 : 1;
        return obj;
      }, {});
      console.log('result',result);
    }
  }, [pieFilter]);

  useEffect(() => {
    let paidData = ordersList
      .filter((item) => item.paid == true)
      .map((item) => item.products);
    let paidDataList = [];
    paidData.forEach((item) => {
      item.forEach((item2) => {
        paidDataList.push(item2);
      });
    });
    let filterPaidData = {};
    let categoryData = [];
    categories.forEach((item) => {
      if (pieFilter === "全產品類別營收比重") {
        filterPaidData[item] = paidDataList.filter(
          (item2) => item2.category === item
        ).length;
        categoryData.push(filterPaidData[item]);
      }
    });

    setChartData(categoryData);
    console.log(chartData);
  }, [ordersList, setChartData]);

  const data = {
    labels: [...categories],
    datasets: [
      {
        label: "# of Votes",
        data: chartData,
        backgroundColor: [
          "#DACBFFE6",
          "#9D7FEAE6",
          "#5434A7E6",
          "#301E5FE6",
        ],
        borderColor: ["#DACBFF", "#9D7FEA", "#5434A7", "#301E5F"],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div class="grid place-content-center mb-14">
      <div class="h-96 w-96">
        {chartData.length > 0 ? (
          <Pie data={data} plugins={[ChartDataLabels]} options={options} />
        ) : null}
      </div>
    </div>
  );
}

export default PieChart;
