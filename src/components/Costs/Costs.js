import Card from "../UI/Card";
import CostsFilter from "../Filter/CostsFilter";
import "../Costs/Costs.css";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const sortCosts = function (year) {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(
    (cost) => cost.date.getFullYear() === +selectedYear
  );

  return (
    <Card className="costs">
      <CostsFilter onChangeYear={sortCosts} year={selectedYear} />
      <CostsDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
    </Card>
  );
}

export default Costs;
