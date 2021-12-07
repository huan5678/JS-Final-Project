import FetchData from "./FetchData";
import { useEffect } from "preact/hooks";

export function CartsList({
  carts,
  setCarts,
  total,
  setTotal,
  finalTotal,
  setFinalTotal,
  sendOrder,
  setSendOrder,
  setModalData,
  handleModal,
}) {
  const moneyFormat = (num) => {
    return Number(num.toFixed(1)).toLocaleString();
  };

  const handleEditCart = (id, quantity) => {
    console.log(id, quantity);
    const data = {
      data: {
        id,
        quantity: +quantity,
      },
    };
    FetchData({ target: "carts-patch", data })
      .then((res) => {
        console.log(res.data);
        setCarts(res.data.carts);
        setTotal(res.data.total);
        setFinalTotal(res.data.finalTotal);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCartsList = (res) => {
    setCarts(res.data.carts);
    setTotal(res.data.total);
    setFinalTotal(res.data.finalTotal);
  };

  const handleClearCarts = () => {
    FetchData({ target: "carts-deleteAll" })
      .then((res) => {
        console.log(res.data);
        handleCartsList(res);
        setModalData({
          target: 'cartsList',
          content: res.data.message,
          title: "",
        });
        handleModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveCartsItem = (cart) => {
    console.log(cart);
    const cartsId = cart.id;
    FetchData({ target: "carts-delete", cartsId })
      .then((res) => {
        console.log(res.data);
        handleCartsList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetchData({ target: "carts-get" }).then((res) => {
      handleCartsList(res);
    });
    (sendOrder === true) ? setSendOrder(false) : null;

  }, [setCarts, setTotal, setFinalTotal, sendOrder, setSendOrder]);

  return (
    <section class="bg-gray-light pt-12 pb-18">
      <h2 class="text-center text-h2 mb-8">我的購物車</h2>
      <table class="container">
        <thead>
          <tr>
            <th class="text-xl font-normal w-4/12">品項</th>
            <th class="text-xl font-normal w-2/12">單價</th>
            <th class="text-xl font-normal w-2/12">數量</th>
            <th class="text-xl font-normal w-2/12">金額</th>
            <th class="w-2/12"></th>
          </tr>
        </thead>
        <tbody class="text-xl font-normal mb-5">
          {carts.map((cart) => (
            <tr class="border-b" key={cart.id}>
              <td class="flex gap-4 items-center py-5">
                <img
                  class="h-20 w-20"
                  src={cart.product.images}
                  alt={cart.product.title}
                />
                <h3>{cart.product.title}</h3>
              </td>
              <td class="text-right pr-12">
                <span class="block line-through text-sm">
                  NT${moneyFormat(cart.product.origin_price)}
                </span>
                NT${moneyFormat(cart.product.price)}
              </td>
              <td class="text-center">
                <div class="flex gap-3 justify-center items-center">
                  <input
                    class="border-none bg-transparent text-center w-1/2 focus:outline-none"
                    type="number"
                    min="1"
                    value={cart.quantity}
                    onBlur={(e) => {
                      handleEditCart(cart.id, e.target.value);
                    }}
                  />
                </div>
              </td>
              <td class="text-right pr-12">
                <span class="block line-through text-sm">
                  NT${moneyFormat(cart.product.origin_price * cart.quantity)}
                </span>
                NT${moneyFormat(cart.product.price * cart.quantity)}
              </td>
              <td class="text-center">
                <button class="" onClick={() => handleRemoveCartsItem(cart)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 transition duration-500 ease-out hover:text-primary hover:scale-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot class="text-xl">
          <tr>
            <td colspan="3" class="py-5">
              {carts.length > 0 ? (
              <button
                class="rounded py-2 px-5 border border-black transition duration-300 ease-in-out hover:bg-black hover:border-transparent hover:text-white"
                onClick={() => handleClearCarts()}
              >
                刪除全部品項
                </button>
              ) : (
                  <p class="text-left pl-12 pt-3 text-primary">您的購物車是空的</p>
              )}
            </td>
            <td class="text-center">
              <span class="block line-through text-sm">原始總金額</span>
              總金額
            </td>
            <td class="text-center">
              <span class="block line-through text-sm">
                NT${moneyFormat(total)}
              </span>
              NT${moneyFormat(finalTotal)}
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
