import { useState } from "preact/hooks";
import Modal from "react-modal";

import Hero from "../components/Hero";
import { CompareTable } from "../components/CompareTable";
import { Recommend } from "../components/Recommend";
import { ShippingMethods } from "../components/ShippingMethods";
import { ProductList } from "../components/ProductList";
import { CartsList } from "../components/CartsList";
import { OrderForm } from "../components/OrderForm";

const ModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 99999,
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 99999,
  },
};

Modal.setAppElement("#app");

const icon = (target) => {
  switch (target) {
    case "productList":
      return <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 text-primary-md"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      break;
    case "cartsList":
      return null;
      break;
    case "orderForm":
      return <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="h-12 w-12 text-primary"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
        />
      </svg>
      break;
  }
}

const Index = () => {
  // 產品列表使用狀態
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  // 購物車列表使用狀態
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // 訂單表單使用狀態
  const [orderData, setOrderData] = useState({});
  const [sendOrder, setSendOrder] = useState(false);

  // Modal使用狀態
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleModal = () => {
      setModalIsOpen(!modalIsOpen);
    };

  return (
    <main>
      <Hero />
      <CompareTable />
      <Recommend />
      <ShippingMethods />
      <ProductList
        products={products}
        setProducts={setProducts}
        categories={categories}
        setCategories={setCategories}
        filterProducts={filterProducts}
        setFilterProducts={setFilterProducts}
        setCarts={setCarts}
        setTotal={setTotal}
        setFinalTotal={setFinalTotal}
        setModalData={setModalData}
        handleModal={handleModal}
      />
      <CartsList
        carts={carts}
        setCarts={setCarts}
        total={total}
        setTotal={setTotal}
        finalTotal={finalTotal}
        setFinalTotal={setFinalTotal}
        sendOrder={sendOrder}
        setSendOrder={setSendOrder}
        setModalData={setModalData}
        handleModal={handleModal}
      />
      <OrderForm
        setOrderData={setOrderData}
        setSendOrder={setSendOrder}
        setModalData={setModalData}
        handleModal={handleModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={ModalStyle}
        closeTimeoutMS={200}
      >
        <div class="flex flex-col items-center justify-center py-4 px-6 space-y-4">
          {icon(modalData.icon)}
          <h2 class="text-xl text-center">{modalData.title}</h2>
          <p class="text-center text-primary-md">{modalData.content}</p>
          <button
            type="button"
            class="w-full bg-primary text-white grid place-content-center rounded-xl text-xl py-3 mb-2"
            onClick={handleModal}
          >
            關閉
          </button>
        </div>
      </Modal>
    </main>
  );
};

export default Index;
