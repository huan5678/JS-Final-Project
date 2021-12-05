import { useState } from "preact/hooks";
import Hero from "../components/Hero";
import { CompareTable } from "../components/CompareTable";
import { Recommend } from "../components/Recommend";
import { ShippingMethods } from "../components/ShippingMethods";
import { ProductList } from "../components/ProductList";
import { CartsList } from "../components/CartsList";
import { OrderForm } from "../components/OrderForm";

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

  const [orderData, setOrderData] = useState({});

  return (
    <div>
      <h1>INDEX</h1>
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
      />
      <CartsList
        carts={carts}
        setCarts={setCarts}
        total={total}
        setTotal={setTotal}
        finalTotal={finalTotal}
        setFinalTotal={setFinalTotal}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <OrderForm orderData={orderData} setOrderData={setOrderData} />
    </div>
  );
};

export default Index;
