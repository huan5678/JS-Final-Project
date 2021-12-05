import FetchData from "./FetchData";
import { useState, useMemo } from "preact/hooks";
import Modal from "react-modal";


const ModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 99999,
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 99999,
  }
}

Modal.setAppElement('#app');

const ProductCard = ({ product, setCarts, setTotal, setFinalTotal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleAddCarts = () => {
    const data = {
      data: {
        productId: product.id,
        quantity: 1,
      },
    };
    FetchData({ target: "carts-post", data })
      .then((res) => {
        console.log(res);
        console.log(res.data.carts[0].product.title + "加入購物車");
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
    <li class="relative flex flex-col">
      <div className="group" onClick={(product) => handleAddCarts(product)}>
        <div class="overflow-clip">
          <img
            src={product.images}
            alt={product.title}
            class="w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <div class="overflow-clip">
          <button
            type="button"
            class="w-full bg-black text-white grid place-content-center text-xl py-3 mb-2 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:bg-primary-dark"
            
          >
            加入購物車
          </button>
        </div>
      </div>
      <h2 class="text-xl">{product.title}</h2>
      <h3 class="text-h2 mt-auto">
        <span class="block text-xl line-through">{product.origin_price}</span>
        {product.price}
      </h3>
      <span class="absolute top-0 right-0 translate-x-1 translate-y-3 bg-black text-white text-xl py-2 px-6">
        新品
      </span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={ModalStyle}
        closeTimeoutMS={200}
      >
        <div class="flex flex-col items-center justify-center py-4 px-6 space-y-4">
          <svg
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
          <h2 class="text-xl">{product.title}</h2>
          <h3 class="text-2xl text-center">成功加入購物車</h3>
          <button
            type="button"
            class="w-full bg-primary text-white grid place-content-center rounded-xl text-xl py-3 mb-2"
            onClick={handleModal}
          >
            關閉
          </button>
        </div>
      </Modal>
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
  useMemo(() => {
    const list = FetchData({ target: "products" });
    list.then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products);
      let data = res.data.products;
      let categories = data.map((item) => item.category);
      // 排除重複的類別
      let category = [...new Set(categories)];
      setCategories(category);
    });
  }, []);

  return (
    <section class="container mb-14">
      <select
        class="border rounded py-2 px-3 w-3/12 mb-8"
        onChange={(e) => handleCategoryChange(e)}
      >
        <option value="All" selected>
          全部
        </option>
        {categories.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>
      <ul class="grid md:grid-cols-3 lg:grid-cols-4 place-content-stretch align-items-stretch gap-[30px]">
        {filterProducts.length > 0
          ? filterProducts.map((product) => {
              return (
                <ProductCard
                  product={product}
                  key={product.title}
                  setCarts={setCarts}
                  setTotal={setTotal}
                  setFinalTotal={setFinalTotal}
                />
              );
            })
          : products.map((product) => {
              return (
                <ProductCard
                  product={product}
                  key={product.title}
                  setCarts={setCarts}
                  setTotal={setTotal}
                  setFinalTotal={setFinalTotal}
                />
              );
            })}
      </ul>
    </section>
  );
}
