import "./CostForm.css";
import React, { useState } from "react";

const CostForm = function (props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const setDescriptionHandler = function (e) {
    setDescription(e.target.value);
  };

  const setAmountHandler = function (e) {
    setAmount(e.target.value);
  };

  const setDateHandler = function (e) {
    setDate(e.target.value);
  };

  const addCostDataHandler = function (e) {
    e.preventDefault();
    const costData = {
      description: description,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveCost(costData);

    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={addCostDataHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            onChange={setDescriptionHandler}
            value={description}
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={setAmountHandler}
            value={amount}
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-01-01"
            onChange={setDateHandler}
            value={date}
          ></input>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
