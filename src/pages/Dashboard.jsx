import {useState, } from 'preact/hooks';

import OderList from "../components/OderList";


const Dashboard = ({setTarget}) => {
  setTarget('Dashboard');
  const [ordersList, setOrdersList] = useState([]);

  return (
    <main class="pt-15">
      <h1 class="text-center text-h2">全產品類別營收比重</h1>
      <OderList ordersList={ordersList} setOrdersList={setOrdersList} />
    </main>
  );
}

export default Dashboard;
