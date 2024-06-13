import { useEffect, useState } from "react";

interface QuoteAPI {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export function QuoteGenerator() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetchData();
    const fetchedAuthor: string = data.author;
    const fetchedContent: string = data.content;
    setAuthor(fetchedAuthor);
    setQuote(fetchedContent);
  };

  const handleClick = () => {
    getData();
  };

  return (
    <div>
      <p>{quote}</p>
      <p>{author}</p>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export async function fetchData() {
  const response = await fetch("https://api.quotable.io/random");
  const data: QuoteAPI = await response.json();
  return data;
}
