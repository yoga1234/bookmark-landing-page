import "./App.css";
import { Navbar, Hero, Features, FeatureTabs } from "./components";
import DownloadExtension from "./components/downloadExtension/DownloadExtension";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <FeatureTabs />
      <DownloadExtension />
    </div>
  );
}

export default App;
