import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";

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
      <p>{quote}</p>
      <p>{author}</p>
      <button onClick={handleClick}>Button</button>
    </section>
  );
}
