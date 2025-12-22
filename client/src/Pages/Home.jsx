import Slider from '../Slider/Slider'
import Batches from '../Batches/Batches'
import Center from '../Center/Centers'
import Free from '../free/FreeResource'
import Topbar from '../components/Topbar/TopBar'
import ContactForm from '../Form/ContactForm'

const Home = () => {
  return (
    <>
      <Topbar/>
      <Slider/>
      <Free/>
      <Batches/>
      <Center/>
      <ContactForm/>
    </>
  );
};

export default Home;
