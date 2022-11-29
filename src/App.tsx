import { useEffect, useState } from "react";
import { Body, BODY_PARTS } from "./components/Body";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";

function App() {
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [word, setWord] = useState("DUDE");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState<string | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !word.split("").includes(letter)
  );
  const correctGuesses = guessedLetters.filter((letter) =>
    word.split("").includes(letter)
  );

  useEffect(() => {
    setNumberOfGuesses(incorrectGuesses.length);
    if (incorrectGuesses.length == BODY_PARTS.length) {
      setDisabled(true);
      setState("lost");
    }
  }, [incorrectGuesses]);

  useEffect(() => {
    if (word.split("").every((letter) => guessedLetters.includes(letter))) {
      setDisabled(true);
      setState("won");
    }
  }, [correctGuesses]);

  function restartGame() {
    setWord("RANDOM");
    setGuessedLetters([]);
    setState(null);
    setDisabled(false);
  }

  if (state != null) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Game over!</h1>
        <p>You {state}</p>
        <p>The word was {word}</p>
        <button onClick={() => restartGame()}>Click to start again</button>
      </div>
    );
  }

  return (
  <>
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "5px auto",
        alignItems: "center",
      }}
    >
      <Body numberOfGuesses={numberOfGuesses} />
      </div>
      <div
        style={{
          marginTop: "2em",
        }}
      >
        <Word word={word} guessedLetters={guessedLetters} />
      </div>
      <div
        style={{
          marginTop: "4em",
        }}
      >
        <Keyboard
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          correctGuesses={correctGuesses}
          incorrectGuesses={incorrectGuesses}
          disabled={disabled}
        />
      </div>
      </>
  );
}

export default App;
