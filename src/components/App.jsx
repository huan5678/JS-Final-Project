import { h } from 'preact';
import { useState } from "preact/hooks";

const Header = () => {
  return (
    <header class="container flex justify-between">
      <h2 class="font-bold text-2xl">
        <a href="/">WOWOROOM</a>
      </h2>
      <ul>
        <li class="text-center">
          <a class=" py-9 px-6 hover:underline transition delay-300 duration-300 ease-in-out" hreg="#">
            床墊優勢
          </a>
        </li>
        <li class="text-center">
          <a class=" py-9 px-6 hover:underline transition delay-300 duration-300 ease-in-out" hreg="#">
            好評推薦
          </a>
        </li>
        <li class="text-center">
          <a class=" py-9 px-6 hover:underline transition delay-300 duration-300 ease-in-out" hreg="#">
            運送方式
          </a>
        </li>
        <li class="text-center">
          <a class=" py-9 px-6 text-primary hover:underline transition delay-300 duration-300 ease-in-out" hreg="#">
            立即訂購
          </a>
        </li>
        <li class="text-center">
          <a class=" py-9 px-6" hreg="#">
            管理介面
          </a>
        </li>
      </ul>
    </header>
  );
};

function App() {
  return (
    <>
      <Header />
      <main>

      </main>
    </>
  );
}

export default App;