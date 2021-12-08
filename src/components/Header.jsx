import { useState, useEffect } from 'preact/hooks';

const Header = ({ target,setTarget }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 768 ?
        setIsMenuOpen(false): null
    };
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <div class="sticky top-0 z-20 bg-white">
      <header class="container bg-white flex justify-between items-center">
        <h2 class="font-logo font-bold text-2xl">
          <a href="/" class="py-4" onClick={()=>setTarget("Index")}>
            WOWOROOM
          </a>
        </h2>
        <button class="link py-6 px-6 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            class="h-8 w-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <nav
          class={`${
            isMenuOpen
              ? "absolute top-0 left-0 w-full bg-gray-light bg-opacity-75 backdrop-blur-[2px] rounded-b-xl mt-20 h-auto visible opacity-100"
              : "invisible h-0 -translate-y-96 opacity-0 absolute"
          } lg:top-auto lg:left-auto lg:bg-opacity-100 lg:bg-transparent lg:flex lg:items-center
          lg:h-auto lg:translate-y-0 lg:opacity-100 lg:visible lg:static transition-all duration-300 ease-in-out`}
        >
          {target === "Index" ? (
            <>
              <a className="link w-full lg:w-auto py-7 px-6" href="#hero">
                床墊優勢
              </a>
              <a className="link w-full lg:w-auto py-7 px-6" href="#recommend">
                好評推薦
              </a>
              <a className="link w-full lg:w-auto py-7 px-6" href="#shipping">
                運送方式
              </a>
              <a
                className="link w-full lg:w-auto py-7 px-6 text-primary"
                href="#order"
              >
                立即訂購
              </a>
              <a className="link w-full lg:w-auto py-7 px-6" href="/dashboard" onClick={() => setTarget("Dashboard")}>
                管理介面
              </a>
            </>
          ) : target === "Dashboard" ? (
            <>
              <a className="link w-full lg:w-auto py-7 px-6" href="">
                後台管理
              </a>
              <a
                className="link w-full lg:w-auto py-7 px-6 text-primary"
                href=""
              >
                管理者登入
              </a>
            </>
          ): <></>}
        </nav>
      </header>
      <div className="bg-black h-10" />
    </div>
  );
};

export default Header;