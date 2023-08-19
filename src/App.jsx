import Footer from "./components/Footer";
import Header from "./components/Header";
import "../src/App.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />

    <div className="flex-grow">
      {/* Your main content goes here */}
      <div class="center-container">
    
  <img class="centered-image" src="src/assets/home.jpg" alt="image"/>
</div>
    </div>

    <Footer />
  </div>
  );
};

export default App;
