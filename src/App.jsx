import Hero from "./components/hero/Hero";
import Popular from "./components/popular/Popular";
import News from "./components/news/News";
import Navigation from "./components/ui/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="wrapper">
        <Hero />
        <News />
        <Popular />
      </main>
    </>
  );
}

export default App;
