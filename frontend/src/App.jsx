import ParfumCard from "@components/ParfumCard";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ParfumCard />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mon-panier" component={Panier} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
