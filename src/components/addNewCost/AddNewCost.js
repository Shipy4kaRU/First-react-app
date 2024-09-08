import CostForm from "./CostForm";
import "./AddNewCost.css";

const AddNewCost = function addNewCost(props) {
  const saveCost = function (cost) {
    const newCost = {
      ...cost,
      id: Math.random().toString,
    };
    props.onAddNewCost(newCost);
  };

  return (
    <div className="new-cost">
      <CostForm onSaveCost={saveCost} />
    </div>
  );
};

export default AddNewCost;
