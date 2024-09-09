import "./Diagram.css";
import DiagramBar from "./DiagramBar";

const Diagram = function (props) {
  const dataSetValues = props.dataSets.map((dataSet) => dataSet.amount);
  const maxAmount = Math.max(...dataSetValues);

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          amount={dataSet.amount}
          maxAmount={maxAmount}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
