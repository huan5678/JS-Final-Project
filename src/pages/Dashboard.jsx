import {useState, useEffect} from 'preact/hooks';
import PieChart from '../components/PieChart';
import OderList from "../components/OderList";


const Dashboard = ({ setTarget }) => {
  useEffect(() => {
    setTarget('Dashboard');
  }, []);
  const [ordersList, setOrdersList] = useState([]);
  const [pieFilter, setPieFilter] = useState("全產品類別營收比重");

  return (
    <main class="pt-15">
      <h1 class="text-center text-h2 mb-24">{pieFilter}</h1>
      <PieChart ordersList={ordersList} pieFilter={pieFilter} />
      <OderList ordersList={ordersList} setOrdersList={setOrdersList} pieFilter={pieFilter} setPieFilter={setPieFilter} />
    </main>
  );
}

export default Dashboard;
