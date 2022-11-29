const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "15px",
      height: "100px",
      position: "absolute",
      top: "110px",
      backgroundColor: "black",
      right: "-4px",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "15px",
      height: "60px",
      position: "absolute",
      top: "120px",
      backgroundColor: "black",
      right: "18px",
      rotate: "20deg",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "15px",
      height: "60px",
      position: "absolute",
      top: "120px",
      backgroundColor: "black",
      right: "-28px",
      rotate: "-20deg",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "15px",
      height: "60px",
      position: "absolute",
      top: "200px",
      backgroundColor: "black",
      right: "18px",
      rotate: "20deg",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "15px",
      height: "60px",
      position: "absolute",
      top: "200px",
      backgroundColor: "black",
      right: "-28px",
      rotate: "-20deg",
    }}
  />
);

export const BODY_PARTS = [
  HEAD,
  BODY,
  LEFT_ARM,
  RIGHT_ARM,
  LEFT_LEG,
  RIGHT_LEG,
];

type BodyProps = {
  numberOfGuesses: number;
};

export function Body({ numberOfGuesses }: BodyProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
