import Slider from "../slider/Slider";
import FreeResource from "../free/FreeResource";
import Batches from "../batches/Batches";
import Centers from "../center/Centers";
import Topbar from "../components/Topbar/TopBar";

const Home = () => {
  return (
    <>
      <Topbar/>
      <Slider />
      <Batches />
      <Centers />
      <FreeResource />
    
    </>
  );
};

export default Home;
