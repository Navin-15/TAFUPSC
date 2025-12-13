import Topbar from "../components/Topbar";
import Slider from "../Slider/Slider";
import FreeResource from "../free/FreeResource";
import Batches from "../Batches/Batches";
import Centers from "../Center/Centers";
import Download from "../downlaod/Download";

const Home = () => {
  return (
    <>
      <Topbar />
      <Slider />
      <FreeResource />
      <Batches />
      <Centers />
      <Download />
    </>
  );
};

export default Home;
