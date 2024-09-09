import CostItem from "./CostItem";
import "./CostList.css";

const CostList = function (props) {
  if (props.costs.length === 0)
    return (
      <h2 className="cost-list__fallback">В этом году не было расходов</h2>
    );

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        ></CostItem>
      ))}
    </ul>
  );
};

export default CostList;
