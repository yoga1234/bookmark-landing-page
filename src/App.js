import "./App.css";
import {
  Navbar,
  Hero,
  Features,
  FeatureTabs,
  DownloadExtension,
} from "./components";

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
