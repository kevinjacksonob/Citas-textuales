import quotes from "../quotes.json";
import { useState } from "react";

const QuoteBox = () => {
  
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));

  const change = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871",
  ];
  const indexColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[indexColor]}`;

  return (
    
      <div className="card" style={{color : colors[indexColor]}}>
        <h2>{quotes[index].quote}</h2>
        <p>{quotes[index].author}</p>
        <button onClick={change}>
          <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>
    
  );
};

export default QuoteBox;
