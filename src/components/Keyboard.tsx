import { useCallback, useEffect } from "react";

type KeyboardProps = {
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  guessedLetters: string[];
  correctGuesses: string[];
  incorrectGuesses: string[];
  disabled: boolean;
};

const KEYBOARDLAYOUT = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({
  guessedLetters,
  setGuessedLetters,
  correctGuesses,
  incorrectGuesses,
  disabled,
}: KeyboardProps) {
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((currGuessedLetters) => [
        ...currGuessedLetters,
        letter.toUpperCase(),
      ]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key)
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, []);

  return (
    <div style={{ alignSelf: "strech" }}>
      {KEYBOARDLAYOUT.map((row, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            width: "100%",
            margin: "0 auto 8px",
            touchAction: "manipulation",
          }}
        >
          {row.map((key) => (
            <button
              key={key}
              onClick={() => addGuessedLetter(key)}
              disabled={disabled}
              style={{
                fontFamily: "inherit",
                fontWeight: "bold",
                border: "0",
                padding: "0",
                margin: "0 6px 00",
                height: "58px",
                borderRadius: "4px",
                cursor: "pointer",
                userSelect: "none",
                color: "white",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "uppercase",
                backgroundColor: correctGuesses.includes(key.toUpperCase())
                  ? "rgb(83, 141, 78)"
                  : incorrectGuesses.includes(key)
                  ? "rgb(58, 58, 60)"
                  : "rgb(129, 131, 132)",
              }}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
