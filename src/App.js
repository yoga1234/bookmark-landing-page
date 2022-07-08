import "./App.css";
import {
  Navbar,
  Hero,
  Features,
  FeatureTabs,
  DownloadExtension,
  Faq,
  Uptodate,
} from "./components";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <FeatureTabs />
      <DownloadExtension />
      <Faq />
      <Uptodate />
      <Footer />
    </div>
  );
}

export default App;
