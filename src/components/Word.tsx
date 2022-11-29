type WordProps = {
  word: string;
  guessedLetters: string[];
};

function Word({ word, guessedLetters }: WordProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        color: "white",
        fontWeight: "bold",
        fontSize: "2rem",
        justifyContent: "center",
        gap: ".25em",
      }}
    >
      {word.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: ".2em black solid",
          }}
        >
          <span
            key={index}
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default Word;
