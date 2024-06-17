import { QuoteGenerator } from "./components/QuoteGenerator";
import { ShowTime } from "./components/ShowTime";
import { MoreButton } from "./components/MoreButton";

function App() {
  return (
    <>
      <section id="main">
        <QuoteGenerator />
        <ShowTime />
      </section>
      <MoreButton />
    </>
  );
}

export default App;
