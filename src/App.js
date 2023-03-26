import Header from "./Components/Header";
import IntroSection from "./Components/IntroSection";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
