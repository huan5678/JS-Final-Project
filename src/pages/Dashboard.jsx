
import { useState, useEffect, useCallback } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import PieChart from "../components/PieChart";
import OderList from "../components/OderList";
import FetchData from "../components/FetchData";

const Dashboard = ({ setTarget }) => {
    const { user, handleToast } = useUserAuth();
  useEffect(() => {
    setTarget("Dashboard");
    handleToast({
          message: `Welcome ${user.email}`,
          option: { theme: "colored", icon: "🥴" },
          status: "success",
        });
  }, []);
  const [ordersList, setOrdersList] = useState([]);
  const [pieFilter, setPieFilter] = useState("全產品類別營收比重");
  const [pieData, setPieData] = useState({
    labels: [],
    data: [],
  });
  const setData = useCallback(
    (labels, data) => {
      setPieData({ labels, data });
    },
    []
  );

  useEffect(() => {
    FetchData({ target: "admin-orders" }).then((res) => {
      setOrdersList(res.data.orders);
      console.log(res.data);
    });
  }, []);



  const CountSalesData = () => {
    let paidData = ordersList
      .filter((item) => item.paid == true)
      .map((item) => item.products);
    let paidDataList = [];
    paidData.forEach((item) => {
      item.forEach((item2) => {
        paidDataList.push(item2);
      });
    });
    return paidDataList;
  };

  const handleChartData = (dates) => {
    const productList = dates.map((item) => item.category);
    console.log("dates", dates);
    let category = [];
    let priceData = [];
    if (pieFilter === "全產品類別營收比重") {
      let filterPaidData = {};
      category = [...new Set(productList)];
      // console.log('category', category);
      dates.forEach((item) => {
        if (filterPaidData[item.category]) {
          filterPaidData[item.category] += item.price;
        } else {
          filterPaidData[item.category] = item.price;
        }
      });
      Object.values(filterPaidData).forEach((item) => {
        priceData.push(item);
      });
      console.log("category", category);
      console.log('priceData', priceData);
    } else {
      let paidItems = {};
      dates.forEach((item) => {
        paidItems[item.title] == undefined ? (paidItems[item.title] = 0) : null;
      });
      console.log("paidItems", paidItems);
      dates.forEach((item) => {
        paidItems[item.title] === 0
          ? (paidItems[item.title] = item.price)
          : (paidItems[item.title] += item.price);
      });
      let priceArr = [];
      let result = Object.entries(paidItems).map(([key, value]) => {
        return { name: key, price: value };
      });
      console.log("result", result);
      result.forEach((item) => {
        priceArr.push(item.price);
      });
      priceArr.sort((a, b) => b - a);
      priceArr.length = 3;
      console.log("priceArr", priceArr);
      let otherPrice = 0;
      result.forEach((item) => {
        priceArr.forEach((item2) => {
          if (item.price === item2) {
            category.push(item.name);
            priceData.push(item.price);
          } else {
            otherPrice += item.price;
          }
        });
      });
      category.push("其他");
      priceData.push(otherPrice);
      console.log("category", category);
      console.log("priceData", priceData);
    }
    setData(category, priceData);
    console.log("pieData", pieData);
  };

  useEffect(() => {
    console.log("pieFilter", pieFilter);
    const paidData = CountSalesData();
    handleChartData(paidData);
  }, [pieFilter, ordersList]);

   useEffect(() => {
     console.log(pieData);
   }, [pieData]);

  return (
    <main className="pt-15">
      <h1 className="text-center text-h2 mb-24">{pieFilter}</h1>
      <div className="grid place-content-center mb-14">
        <div className="h-96 w-96">
          {pieData.data.length > 0 ? (
            <PieChart pieData={pieData} />
          ) : (
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="animate-spin h-24 w-24 text-gray"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
              </svg>
            </div>
          )}
        </div>
      </div>
      <OderList
        ordersList={ordersList}
        setOrdersList={setOrdersList}
        pieFilter={pieFilter}
        setPieFilter={setPieFilter}
      />
    </main>
  );
};

export default Dashboard;
