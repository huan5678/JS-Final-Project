import FetchData from "./FetchData";
import { useState, useMemo, useCallback } from "preact/hooks";

export function CartsList({
  carts,
  setCarts,
  total,
  setTotal,
  finalTotal,
  setFinalTotal,
}) {
  const moneyFormat = useCallback(
    (num) => {
      return Number(num.toFixed(1)).toLocaleString();
    },
    [total, setTotal, finalTotal, setFinalTotal]
  );

  const handleCartsList = useCallback(
    (res) => {
      console.log(res);
      const newArr = res.data.carts.map((cart) => {
        cart.isEditable = false;
        return cart;
      });
      setCarts(newArr);
      setTotal(res.data.total);
      setFinalTotal(res.data.finalTotal);
    },
    [setCarts, setTotal, setFinalTotal]
  );

  const handleClearCarts = useCallback(() => {
    FetchData({ target: "carts-deleteAll" })
      .then((res) => {
        console.log(res.data);
        handleCartsList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemoveCartsItem = useCallback((cart) => {
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
  }, []);

  useMemo(() => {
    FetchData({ target: "carts-get" }).then((res) => {
      handleCartsList(res);
    });
  }, []);

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
              <td class="text-center">{cart.quantity}</td>
              <td class="text-center">
                NT${moneyFormat(cart.product.price * cart.quantity)}
              </td>
              <td class="text-center">
                <button class="" onClick={() => handleRemoveCartsItem(cart)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 transition duration-500 ease-out hover:text-red hover:scale-150"
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
              <button
                class="rounded py-2 px-5 border border-black transition duration-300 ease-in-out hover:bg-red hover:border-transparent hover:text-white"
                onClick={() => handleClearCarts()}
              >
                刪除全部品項
              </button>
            </td>
            <td class="text-center">總金額</td>
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
