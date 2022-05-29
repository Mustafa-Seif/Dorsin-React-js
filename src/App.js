import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Form from './component/Form';
import Nav from './component/Nav';
import People from './component/People';
import Pricing from './component/Pricing';
import Servies from './component/Servies';
import Started from './component/Started';

function App() {
  return (
    <div >
    <Nav/>
    <Servies/>
    <About/>
    <Pricing/>
    <People/>
    <Started/>
    <Form/>
    <Footer/>
      
    </div>
  );
}

export default App;

