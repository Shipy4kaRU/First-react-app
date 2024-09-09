import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import AddNewCost from "./components/addNewCost/AddNewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2020, 2, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2021, 3, 1),
    description: "Джинсы",
    amount: 49.99,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const setNewCost = function (newCost) {
    setCosts((previousValue) => {
      return [newCost, ...previousValue];
    });
  };

  return (
    <div>
      <AddNewCost onAddNewCost={setNewCost} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
