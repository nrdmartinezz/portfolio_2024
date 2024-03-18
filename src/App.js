import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Banner from "./components/Banner";

let App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="app-container">
        <div className="home">
          <h1 className="author-name">Nate <br/>Martinez</h1>
          <p className="author-bio">
            I design unique user experiences with purpose and a strong attention
            to detail. Available for work.
          </p>
        </div>
        <Projects></Projects>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default App;
