import Evolution from "./Components/Evolution";
import Footer from "./Components/Footer"; 
import GetInTouch from "./Components/GetInTouch";
import MainContainer from "./Components/MainContainer";
import Navbar from "./Components/Navbar";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; //To apply toast CSS required for ToastContainer
function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* All the main sections of website */}
      <Navbar /> 
      <MainContainer />
      <Evolution/>
      <GetInTouch />
      <Footer/>
      {/* To get the toast notification */}
      <ToastContainer position="bottom-center"/>
    </div>
  );
}

export default App;
