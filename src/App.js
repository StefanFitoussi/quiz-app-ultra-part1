import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Card
          question="Wieso, weshalb, warum?"
          answer="Keine Ahnung"
          tag_1="#yeah"
          tag_2="#yo"
          tag_3="#what"
        />
        <Card />
        <Card />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
