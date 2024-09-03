import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const numberofWords = text.split(/\s/).filter((word) => word !== "").length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        numberOfCharacters={numberOfCharacters}
        numberofWords={numberofWords}
      />
    </main>
  );
}
