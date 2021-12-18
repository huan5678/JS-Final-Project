import { useState, useEffect } from 'react';
import { useUserAuth } from "../context/UserAuthContext";

const Header = ({ target, setTarget }) => {
  const { user, logOut, handleToast } = useUserAuth();
  // console.log(user);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 768 ? setIsMenuOpen(false) : null;
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const Avator = ({className}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className={className}
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
    );
  }

  const handleLogout = async () => {
    try {
      await logOut();
      handleToast({
        message: "使用者登出!",
        option: { theme: "colored", icon: "👋" },
        status: "info",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

    const [headerHeight, setHeaderHeight] = useState("0%");
  const [lastScroll, setLastScroll] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);

    const headerStyle = {
      transform: `translateY(${headerHeight})`,
    };

  useEffect(() => {
    if (target === "Index") {
      window.addEventListener("scroll", function () {
        setCurrentScroll(window.pageYOffset);

        if (currentScroll <= 0) {
          setHeaderHeight("0%");
          return;
        }

        // 當前捲軸位置大於上一次捲軸位置 且 header目前顯示
        if (currentScroll > lastScroll && headerHeight === "0%") {
          setHeaderHeight("-100%");
        }
        // 當前捲軸位置小於上一次捲軸位置 且 header已經收起來
        else if (currentScroll < lastScroll && headerHeight === "-100%") {
          setHeaderHeight("0%");
        }
        // 更新上一次捲軸位置
        setLastScroll(currentScroll);

        // console.log("currentScroll", currentScroll);
        // console.log("lastScroll", lastScroll);
        // console.log(headerHeight);
        // console.log(headerStyle);
      });
    }
    }, [currentScroll,target]);
  
  return (
    <div className="sticky top-0 z-20 bg-white transition-all duration-300" style={headerStyle}>
      <header className="container bg-white flex justify-between items-center">
        <h2 className="font-logo font-bold text-2xl">
          <a href="/#" className="py-4" onClick={() => setTarget("Index")}>
            WOWOROOM
          </a>
        </h2>
        <button className="link py-6 px-6 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="h-8 w-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <nav
          className={`${
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
              {
                user ? (
              <a
                className="link w-full lg:w-auto py-7 px-6"
                href="/dashboard"
                onClick={() => setTarget("Dashboard")}
              >
                管理介面
                  </a>
                ) : (
                <a
                className="link w-full lg:w-auto py-7 px-6"
                href="/login"
                onClick={() => setTarget("")}
              >
                管理者登入
                    </a>
                )
              }
            </>
          ) : target === "Dashboard" ? (
            <>
              {user && user.email ? (
                <h2 className="text-xl text-primary mr-4">
                    歡迎
                    <span className="mx-2">
                    <Avator className="text-secondary h-8 w-8 inline" />
                    </span>
                    管理者:{user.email} 😃
                </h2>
              ) : (
                <></>
              )}
              <a
                className="link w-full lg:w-auto py-7 px-6 text-primary"
                  onClick={handleLogout}
                  href="/"
              >
                登出
              </a>
            </>
          ) : (
            <div className="py-10"></div>
          )}
        </nav>
      </header>
      <div className="bg-black h-10" />
    </div>
  );
};

export default Header;