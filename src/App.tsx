import { QuoteGenerator } from "./components/QuoteGenerator";
import { ShowTime } from "./components/ShowTime";
import { MoreButton } from "./components/MoreButton";
import dayImage from "./components/assets/mobile/bg-image-daytime.jpg";

function App() {
  return (
    <main>
      <div
        className="h-screen bg-black/30 bg-cover bg-top bg-blend-overlay"
        style={{
          backgroundImage: `url(${dayImage})`,
        }}
      >
        <QuoteGenerator />
        <ShowTime />
        <MoreButton />
      </div>
    </main>
  );
}

export default App;
