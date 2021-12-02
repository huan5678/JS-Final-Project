
import { Link } from "preact-router/match";

const Header = () => {
  return (
    <header class="container flex justify-between items-center">
      <h2 class="font-logo font-bold text-2xl">
        <a href="/" class="py-4">
          WOWOROOM
        </a>
      </h2>
      <nav class="flex justify-between items-center">
        <button class="link  py-6 px-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            class="h-8 w-8"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <a className="link py-7 px-6" href="#">
          床墊優勢
        </a>

        <a className="link py-7 px-6" href="#">
          好評推薦
        </a>

        <a className="link py-7 px-6" href="#">
          運送方式
        </a>

        <a className="link py-7 px-6 text-primary" href="#">
          立即訂購
        </a>

        <a className="link py-7 px-6" href="/dashboard">
          管理介面
        </a>
      </nav>
    </header>
  );
};

export default Header;