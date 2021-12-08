import { useEffect } from 'preact/hooks';
import FetchData from "./FetchData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["1", "2", "3", "4"],
  datasets: [
    {
      label: "# of Votes",
      data: [ 3, 5, 2, 3],
      backgroundColor: [
        "#DACBFF",
        "#9D7FEA",
        "#5434A7",
        "#301E5F",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const OderList = ({ ordersList, setOrdersList }) => {
  const handleOrderList = (res) => {
    setOrdersList(res.data.orders);
  };

  useEffect(() => {
    FetchData({ target: "admin-orders" }).then((res) => {
      handleOrderList(res);
      console.log(res.data);
    });
  }, [setOrdersList]);

  return (
    <section class="container">
      <Doughnut data={data} />
      <div class="flex flex-wrap space-y-3">
        <button
          class="ml-auto rounded py-2 px-5 border border-black transition duration-300 ease-in-out hover:bg-black hover:border-transparent hover:text-white"
          onClick={() => handleClearOrders()}
        >
          清除全部訂單
        </button>
        <div class="w-full overflow-x-auto">
          <table class="border-collapse border border-secondary min-w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="text-left font-normal border border-secondary px-4 py-3"
                >
                  訂單編號
                </th>
                <th
                  scope="col"
                  class="text-left font-normal border border-secondary px-4 py-3"
                >
                  聯絡人
                </th>
                <th
                  scope="col"
                  class="text-left font-normal border border-secondary px-4 py-3"
                >
                  聯絡地址
                </th>
                <th
                  scope="col"
                  class="text-left font-normal border border-secondary px-4 py-3"
                >
                  電子郵件
                </th>
                <th
                  scope="col"
                  class="text-left font-normal border border-secondary px-4 py-3"
                >
                  訂單品項
                </th>
                <th
                  scope="col"
                  class="text-left font-normal border border-secondary px-4 py-3"
                >
                  訂單日期
                </th>
                <th
                  scope="col"
                  class="text-left font-normal border border-secondary px-4 py-3"
                >
                  訂單狀態
                </th>
                <th
                  scope="col"
                  class="text-left font-normal border border-secondary px-4 py-3"
                >
                  操作
                </th>
              </tr>
            </thead>
            <tbody>
              {ordersList != undefined && ordersList.length > 0 ? (
                ordersList.map((order) => (
                  <tr class=" whitespace-nowrap" key={order.id}>
                    <th scope="row" class="border border-secondary px-4 py-3">
                      {order.id}
                    </th>
                    <td class="border border-secondary px-4 py-3">
                      {order.user.name}
                      <br />
                      {order.user.tel}
                    </td>
                    <td class="border border-secondary px-4 py-3">
                      {order.user.address}
                    </td>
                    <td class="border border-secondary px-4 py-3">
                      {order.user.email}
                    </td>
                    <td class="border border-secondary px-4 py-3">
                      {order.products.map((products) => (
                        <div>{products.title}</div>
                      ))}
                    </td>
                    <td class="border border-secondary px-4 py-3">
                      {new Date(order.createdAt * 1000).getUTCFullYear()}/
                      {new Date(order.createdAt * 1000).getUTCMonth() + 1}/
                      {new Date(order.createdAt * 1000).getUTCDate()}
                    </td>
                    <td
                      class="border border-secondary px-4 py-3 cursor-pointer text-blue underline"
                      onClick={() => handleOrderStatusChange()}
                    >
                      {order.paid ? "已處理" : "未處理"}
                    </td>
                    <td class="border border-secondary px-4 py-3">
                      <button
                        type="button"
                        class="bg-red hover:bg-red-dark text-white"
                      >
                        刪除
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colspan="9"></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OderList;
