import "../css/Grid.css";

interface Props {
  data: number[][];
}

export default function Grid({ data }: Props) {
  return (
    <div className="grid-container">
      {data.map((row, i) => {
        return (
          <div className={`grid-row${i === 0 ? " first" : ""}`} key={i}>
            {row.map((cell, j) => {
              return (
                <div className={`grid-cell${j === 0 ? " first" : ""}`} key={j}>
                  {cell}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
