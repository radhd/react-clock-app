import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";
import iconRefresh from "./assets/desktop/icon-refresh.svg";

interface QuoteAPI {
  content: string;
  author: string;
}

export function QuoteGenerator() {
  const [author, setAuthor] = useState<string>("");
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "https://api.quotable.io/random";
    const data: QuoteAPI = await fetchData(url);
    const fetchedAuthor: string = data.author;
    const fetchedContent: string = data.content;
    setAuthor(fetchedAuthor);
    setQuote(fetchedContent);
  };

  const handleClick = () => {
    getData();
  };

  return (
    <section>
      <div className="font-inter flex px-7 py-10 text-white">
        <div>
          <p className="mb-2 text-sm text-[#D8D8D8]">"{quote}"</p>
          <p className="font-semiBold">{author}</p>
        </div>
        <div>
          <button onClick={handleClick}>
            <div className="ms-3 w-12">
              <img src={iconRefresh} alt="" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
