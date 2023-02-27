import "./App.css";

import Header from "./components/Header/Header";
import PointsList from "./components/PointsList/PointsList";
import Footer from "./components/Footer/Footer";

import data from "./data.json";

function App() {
  return (
    <div className="App darkMode">
      <Header />
      <PointsList data={data} amount="10" />
      <Footer okText="Let's go!" laterText="Later" />
    </div>
  );
}

export default App;
