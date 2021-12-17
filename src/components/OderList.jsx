
import FetchData from "./FetchData";

const OderList = ({
  ordersList,
  setOrdersList,
  pieFilter,
  setPieFilter,
}) => {

    const handleOrderStatusChange = (id, paid) => {
      FetchData({
        target: "admin-put",
        data: {
          data: {
            id,
            paid: !paid,
          },
        },
      })
        .then((res) => {
          setOrdersList(res.data.orders);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  const handleDeleteOrder = (ordersId) => {
    FetchData({
      target: "admin-delete",
      ordersId,
    })
      .then((res) => {
        setOrdersList(res.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePieFilter = (target) => {
    setPieFilter(target);
  };

  return (
    <section className="container">
      <div className="flex justify-between flex-wrap gap-3 pb-32">
        <div className="">
          <button
            type="button"
            className="rounded mr-4 py-2 px-5 border border-primary text-primary transition duration-300 ease-in-out hover:bg-primary hover:border-transparent hover:text-white disabled:opacity-20 disabled:bg-primary disabled:text-white"
            disabled={pieFilter === "全產品類別營收比重"}
            onClick={() => handlePieFilter("全產品類別營收比重")}
          >
            全產品類別營收比重
          </button>
          <button
            type="button"
            className="rounded mr-4 py-2 px-5 border border-primary text-primary transition duration-300 ease-in-out hover:bg-primary hover:border-transparent hover:text-white disabled:opacity-20 disabled:bg-primary disabled:text-white"
            disabled={pieFilter === "全品項營收比重"}
            onClick={() => handlePieFilter("全品項營收比重")}
          >
            全品項營收比重
          </button>
        </div>
        <div>
          {ordersList.length === 0 && ordersList === null ? (
            <button
              type="button"
              className="rounded mr-4 py-2 px-5 border border-blue text-blue transition duration-300 ease-in-out hover:bg-blue hover:border-transparent hover:text-white"
              onClick={() => handleCreateOrder()}
            >
              快速產生訂單
            </button>
          ) : null}
          <button
            type="button"
            className="rounded py-2 px-5 border border-red text-red transition duration-300 ease-in-out hover:bg-red hover:border-transparent hover:text-white"
            onClick={() => handleClearOrders()}
          >
            清除全部訂單
          </button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-left font-normal border border-secondary px-4 py-3"
                >
                  訂單編號
                </th>
                <th
                  scope="col"
                  className="text-left font-normal border border-secondary px-4 py-3"
                >
                  聯絡人
                </th>
                <th
                  scope="col"
                  className="text-left font-normal border border-secondary px-4 py-3"
                >
                  聯絡地址
                </th>
                <th
                  scope="col"
                  className="text-left font-normal border border-secondary px-4 py-3"
                >
                  電子郵件
                </th>
                <th
                  scope="col"
                  className="text-left font-normal border border-secondary px-4 py-3"
                >
                  訂單品項
                </th>
                <th
                  scope="col"
                  className="text-left font-normal border border-secondary px-4 py-3"
                >
                  訂單日期
                </th>
                <th
                  scope="col"
                  className="text-left font-normal border border-secondary px-4 py-3"
                >
                  訂單狀態
                </th>
                <th
                  scope="col"
                  className="text-left font-normal border border-secondary px-4 py-3"
                >
                  操作
                </th>
              </tr>
            </thead>
            <tbody>
              {ordersList != undefined && ordersList.length > 0 ? (
                ordersList.map((order) => (
                  <tr
                    className={`whitespace-nowrap ${
                      order.paid === true
                        ? "text-gray-light bg-primary-dark bg-opacity-40"
                        : ""
                    }`}
                    key={order.id}
                  >
                    <th
                      scope="row"
                      className="border border-secondary px-4 py-3"
                    >
                      {order.id}
                    </th>
                    <td className="border border-secondary px-4 py-3">
                      {order.user.name}
                      <br />
                      {order.user.tel}
                    </td>
                    <td className="border border-secondary px-4 py-3">
                      {order.user.address}
                    </td>
                    <td className="border border-secondary px-4 py-3">
                      {order.user.email}
                    </td>
                    <td className="border border-secondary px-4 py-3">
                      {order.products.map((products) => (
                        <div key={products.id}>{products.title}</div>
                      ))}
                    </td>
                    <td className="border border-secondary px-4 py-3">
                      {new Date(order.createdAt * 1000).getUTCFullYear()}/
                      {new Date(order.createdAt * 1000).getUTCMonth() + 1}/
                      {new Date(order.createdAt * 1000).getUTCDate()}
                    </td>
                    <td
                      className={`border border-secondary px-4 py-3 cursor-pointer  underline ${
                        order.paid === true ? "text-gray-light" : "text-blue"
                      }`}
                      onClick={() =>
                        handleOrderStatusChange(order.id, order.paid)
                      }
                    >
                      {order.paid ? "已處理" : "未處理"}
                    </td>
                    <td className="border border-secondary px-4 py-3">
                      <button
                        type="button"
                        className="bg-red hover:bg-red-dark text-white py-2 px-4 rounded"
                        onClick={() => handleDeleteOrder(order.id)}
                      >
                        刪除
                      </button>
                    </td>
                  </tr>
                ))
              ) : ordersList.length === 0 && ordersList === null ? (
                <tr>
                  <td colSpan="9">目前無任何訂單資料</td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="animate-spin h-16 w-16 text-gray"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                      />
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                  </td>
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
