import "./App.css";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <div className="app">
      <TopHeader />
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
      <p>Test text</p>
    </div>
  );
}

export default App;
