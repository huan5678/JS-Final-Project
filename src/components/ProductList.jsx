import FetchData from "./FetchData";
import { useState, useEffect } from "react";


const ProductCard = ({
  product,
  setCarts,
  setTotal,
  setFinalTotal,
  setModalData,
  handleModal,
  idx,
}) => {

  const handleAddCarts = () => {
    const data = {
      data: {
        productId: product.id,
        quantity: 1,
      },
    };
    FetchData({ target: "carts-post", data })
      .then((res) => {
        // console.log(res);
        // console.log(res.data.carts[0].product.title + "加入購物車");
        setModalData({
          icon: "productList",
          title: res.data.carts[0].product.title,
          content: "成功加入購物車",
        });
        handleModal();
        setCarts(res.data.carts);
        setTotal(res.data.total);
        setFinalTotal(res.data.finalTotal);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <li
      className="relative flex flex-col"
      data-aos="fade-in"
      data-aos-delay={Math.floor(idx*100+300)}
    >
      <div className="group" onClick={(product) => handleAddCarts(product)}>
        <div className="overflow-clip">
          <img
            src={product.images}
            alt={product.title}
            className="w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <div className="overflow-clip">
          <button
            type="button"
            className="w-full bg-black text-white grid place-content-center text-xl py-3 mb-2 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:bg-primary-dark"
          >
            加入購物車
          </button>
        </div>
      </div>
      <h2 className="text-xl">{product.title}</h2>
      <h3 className="text-h2 mt-auto">
        <span className="block text-xl line-through">
          {product.origin_price}
        </span>
        {product.price}
      </h3>
      <span className="absolute top-0 right-0 translate-x-1 translate-y-3 bg-black text-white text-xl py-2 px-6">
        新品
      </span>
    </li>
  );
};

export function ProductList({
  products,
  setProducts,
  categories,
  setCategories,
  filterProducts,
  setFilterProducts,
  setCarts,
  setTotal,
  setFinalTotal,
  setModalData,
  handleModal,
}) {
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const filterData = products.filter((product) => {
      if (category === "All") {
        return product;
      } else {
        return product.category === category;
      }
    });
    setFilterProducts(filterData);
  };
  useEffect(() => {
    const list = FetchData({ target: "products" });
    list.then((res) => {
      // console.log(res.data.products);
      setProducts(res.data.products);
      let data = res.data.products;
      let categories = data.map((item) => item.category);
      // 排除重複的類別
      let category = [...new Set(categories)];
      setCategories(category);
    });
  }, []);

  return (
    <section className="container mb-14">
      <select
        className="border rounded py-2 px-3 w-3/12 mb-8"
        onChange={(e) => handleCategoryChange(e)}
        defaultValue=""
      >
        <option value="All">
          全部
        </option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <ul className="grid md:grid-cols-3 lg:grid-cols-4 place-content-stretch align-items-stretch gap-[30px]">
        {filterProducts.length > 0
          ? filterProducts.map((product,idx) => {
              return (
                <ProductCard
                  product={product}
                  key={product.title}
                  setCarts={setCarts}
                  setTotal={setTotal}
                  setFinalTotal={setFinalTotal}
                  setModalData={setModalData}
                  handleModal={handleModal}
                  idx={idx}
                />
              );
            })
          : products.map((product,idx) => {
              return (
                <ProductCard
                  product={product}
                  key={product.title}
                  setCarts={setCarts}
                  setTotal={setTotal}
                  setFinalTotal={setFinalTotal}
                  setModalData={setModalData}
                  handleModal={handleModal}
                  idx={idx}
                />
              );
            })}
      </ul>
    </section>
  );
}
