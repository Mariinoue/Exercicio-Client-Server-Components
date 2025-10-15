"use client";

import { useEffect, useState } from "react";

interface Quote {
  quote: string;
  author: string;
}

interface QuoteComponentProps {
  productId: string;
}

const QuoteComponent = ({ productId }: QuoteComponentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [quotes, setQuotes] = useState<Quote | null>();

  useEffect(() => {
    const getQuotes = async () => {
      setIsLoading(true);
      try {
        const request = `https://dummyjson.com/quotes/${productId}`;
        const response = await fetch(request);
        const data: Quote = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error(`Error fetching quotes: ${error}`);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getQuotes();
  }, [productId]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (!quotes) {
    return <p>Não há citação.</p>;
  }

  return (
    <div className="mt-6 p-4">
      <p className="text-lg italic text-gray-600">
       Citação:  {quotes.quote}
      </p>
      <p className="block text-right text-gray-500 mt-2">
       Autor - {quotes.author}
      </p>
    </div>
  );
};

export default QuoteComponent;
