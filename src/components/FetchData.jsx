import axios from "axios";

const apiPath = import.meta.env.API_PATH;
const apiKey = import.meta.env.API_KEY;
const baseUrl = "https://livejs-api.hexschool.io/api/livejs/v1";

const productsUrl =
  `${baseUrl}/customer/${apiPath}/products`;

const cartUrl =
  `${baseUrl}/customer/${apiPath}/carts`;

const customerOrderUrl =
  `${baseUrl}/customer/${apiPath}/orders`;

const adminUrl =
  `${baseUrl}/admin/${apiPath}/orders`;

const header = {
  headers: {
    Authorization: `${apiKey}`
  }
}

const FetchData = (props) => {
  console.log(props);
  const target = props.target;

  switch (target) {
    // 取得產品列表
    case "products":
      return axios.get(productsUrl);
      break;
    // 取得購物車
    case "carts-get":
      return axios.get(cartUrl);
      break;
    // 加入購物車
    case "carts-post":
      return axios.post(cartUrl, props.data);
      break;
    // 編輯購物車數量(購物車ID)
    case "carts-patch":
      return axios.patch(cartUrl, props.data);
      break;
    // 清空購物車
    case "carts-deleteAll":
      return axios.delete(cartUrl);
      break;
    // 刪除購物車單筆(購物車ID)
    case "carts-delete":
      return axios.delete(`${cartUrl}/${props.cartsId}`);
      break;
    // 送出訂單
    case "customer-orders":
      return axios.post(customerOrderUrl, props.data);
      break;
    // 取得訂單列表
    case "admin-orders":
      return axios.get(adminUrl, header);
      break;
    // 修改訂單狀態 (訂單ID | 訂單狀態(true:已處理, false:未處理))
    case "admin-put":
      return axios.put(adminUrl, props.data,header);
      break;
    // 清空訂單
    case "admin-deleteAll":
      return axios.delete(adminUrl, header);
      break;
    // 刪除訂單 (訂單ID)
    case "admin-delete":
      return axios.delete(`${adminUrl}/${props.ordersId}`, header);
      break;
  }
  return null;
}

export default FetchData;
