import "./DiagramBar.css";

const DiagramBar = function (props) {
  let barFillHeight = "0%";

  if (props.maxAmount > 0)
    barFillHeight = Math.round((props.amount / props.maxAmount) * 100) + "%";

  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div
          className="diagram-bar__fill"
          style={{
            height: barFillHeight,
          }}
        ></div>
      </div>
      <div className="diagram-bar__label">{props.label}</div>
    </div>
  );
};

export default DiagramBar;
