import "../css/Grid.css";

interface Props {
  data: number[][];
}

export default function Grid({ data }: Props) {
  return (
    <div className="grid-container">
      {data.map((row, i) => {
        return (
          <div className={`grid-row${i === 0 ? " first" : ""}`}>
            {row.map((cell, j) => {
              return (
                <div className={`grid-cell${j === 0 ? " first" : ""}`}>
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
