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
    </div>
  );
}

export default App;
