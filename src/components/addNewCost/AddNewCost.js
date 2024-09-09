import React, { useState } from "react";
import CostForm from "./CostForm";
import "./AddNewCost.css";

const AddNewCost = function (props) {
  const [form, setForm] = useState(false);

  const saveCostHandler = function (cost) {
    const newCost = {
      ...cost,
      id: Math.random().toString,
    };
    props.onAddNewCost(newCost);
    setForm(false);
  };

  const openFormHandler = function () {
    setForm(true);
  };

  const cancelCostHandler = function () {
    setForm(false);
  };

  return (
    <div className="new-cost">
      {form && (
        <CostForm onSaveCost={saveCostHandler} onCancel={cancelCostHandler} />
      )}
      {!form && (
        <button onClick={openFormHandler}>Добавить новый расход</button>
      )}
    </div>
  );
};

export default AddNewCost;
