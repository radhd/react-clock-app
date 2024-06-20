import { QuoteGenerator } from "./components/QuoteGenerator";
import { ShowTime } from "./components/ShowTime";
import { MoreButton } from "./components/MoreButton";
import dayImage from "./components/assets/mobile/bg-image-daytime.jpg";

function App() {
  return (
    <main className="font-inter">
      <div
        className="flex min-h-[667px] flex-col justify-between bg-black/30 bg-cover bg-top bg-blend-overlay"
        style={{
          backgroundImage: `url(${dayImage})`,
        }}
      >
        <QuoteGenerator />
        <div>
          <ShowTime />
          <MoreButton />
        </div>
      </div>
    </main>
  );
}

export default App;
