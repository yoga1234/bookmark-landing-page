import "./App.css";
import {
  Navbar,
  Hero,
  Features,
  FeatureTabs,
  DownloadExtension,
} from "./components";
import Faq from "./components/faq/Faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <FeatureTabs />
      <DownloadExtension />
      <Faq />
    </div>
  );
}

export default App;
