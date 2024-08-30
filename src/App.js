import './App.css';
import Navbar from './components/Navbar/Navbar';
import { TextSlide } from './components/TextSlide/TextSlide';
import { ImageCarousel} from './components/ImageCarousel/ImageCarousel'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <TextSlide></TextSlide>
      <ImageCarousel></ImageCarousel>
    </div>
  );
}

export default App;
