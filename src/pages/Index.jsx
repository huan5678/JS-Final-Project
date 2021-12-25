import { useState, useEffect } from "react";


import Hero from "../components/Hero";
import { CompareTable } from "../components/CompareTable";
import { Recommend } from "../components/Recommend";
import { ShippingMethods } from "../components/ShippingMethods";
import { ProductList } from "../components/ProductList";
import { CartsList } from "../components/CartsList";
import { OrderForm } from "../components/OrderForm";


const Index = ({ setTarget, setModalData, handleModal, setModalIsOpen }) => {
  useEffect(() => {
    setTarget("Index");
  }, []);

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

  return (
    <main>
      <Hero />
      <CompareTable />
      <Recommend />
      <ShippingMethods />
      <ProductList
        carts={carts}
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
        setModalIsOpen={setModalIsOpen}
      />
      <OrderForm
        setOrderData={setOrderData}
        setSendOrder={setSendOrder}
        setModalData={setModalData}
        handleModal={handleModal}
      />
    </main>
  );
};

export default Index;
