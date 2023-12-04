import "../css/Grid.css";

interface Props {
  data: number[][];
}

export default function Grid({ data }: Props) {
  return (
    <div className="grid-container">
      {data.map((row) => {
        return (
          <div className="grid-row">
            {row.map((cell) => {
              return <div className="grid-cell">{cell.toString()}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}
