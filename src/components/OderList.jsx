import { useEffect,useState } from 'preact/hooks';
import FetchData from "./FetchData";


const OderList = ({ ordersList, setOrdersList, pieFilter, setPieFilter }) => {
  const handleOrderList = (res) => {
    setOrdersList(res.data.orders);
  };


  useEffect(() => {
    FetchData({ target: "admin-orders" }).then((res) => {
      handleOrderList(res);
      console.log(res.data);
    });
  }, [setOrdersList]);

  const handleOrderStatusChange = (id,paid) => {
    FetchData({
      target: "admin-put", data: {
        data: {
          id,
          paid: !paid
        }
      }
    }).then((res) => {
      handleOrderList(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleDeleteOrder = (ordersId) => {
    FetchData({
      target: "admin-delete", ordersId
    }).then((res) => {
      handleOrderList(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  const handlePieFilter = () => {
    let filter =
      pieFilter === "全產品類別營收比重"
        ? "全品項營收比重"
        : pieFilter === "全品項營收比重"
        ? "全產品類別營收比重"
          : null;
    console.log(filter);
    setPieFilter(filter);
  }

  return (
    <section class="container">
      <div class="flex justify-between flex-wrap gap-3 pb-32">
        <button
          type="button"
          class="rounded mr-4 py-2 px-5 border border-primary text-primary transition duration-300 ease-in-out hover:bg-primary hover:border-transparent hover:text-white"
          onClick={() => handlePieFilter()}
        >
          切換圓餅圖項目
        </button>
        <button
          type="button"
          class="rounded py-2 px-5 border border-red text-red transition duration-300 ease-in-out hover:bg-red hover:border-transparent hover:text-white"
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
                  <tr
                    class={`whitespace-nowrap ${
                      order.paid === true
                        ? "text-gray-light bg-primary-md bg-opacity-60"
                        : ""
                    }`}
                    key={order.id}
                  >
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
                      class={`border border-secondary px-4 py-3 cursor-pointer  underline ${
                        order.paid === true ? "text-gray-light" : "text-blue"
                      }`}
                      onClick={() =>
                        handleOrderStatusChange(order.id, order.paid)
                      }
                    >
                      {order.paid ? "已處理" : "未處理"}
                    </td>
                    <td class="border border-secondary px-4 py-3">
                      <button
                        type="button"
                        class="bg-red hover:bg-red-dark text-white py-2 px-4 rounded"
                        onClick={() => handleDeleteOrder(order.id)}
                      >
                        刪除
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colspan="9">目前無任何訂單資料</td>
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
