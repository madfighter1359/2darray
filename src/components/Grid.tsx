import "../css/Grid.css";

interface Props {
  data: number[][];
}

export default function Grid({ data }: Props) {
  return (
    <div className="grid-container">
      {data.map((row, i) => {
        return (
          <div className="grid-row">
            {row.map((cell, j) => {
              return <div className="grid-cell">{data.length * i + j + 1}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}
