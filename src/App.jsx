import Footer from "./components/Footer";
import Header from "./components/Header";
import image from "./assets/home.jpg";
import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />

    <div className="flex-grow">
      {/* Your main content goes here */}
      <div class="center-container">
    
  <img class="centered-image" src={image} alt="image"/>
</div>
    </div>

    <Footer />
  </div>
  );
};

export default App;
