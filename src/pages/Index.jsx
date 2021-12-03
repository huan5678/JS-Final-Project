import Hero from "../components/Hero";
import { CompareTable } from "../components/CompareTable";
import { Recommend } from "../components/Recommend";

const Index = () => {
  return (
    <div>
      <h1>INDEX</h1>
      <Hero />
      <CompareTable></CompareTable>
      <Recommend></Recommend>
    </div>
  );
};

export default Index;
