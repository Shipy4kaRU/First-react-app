import "./CostDate.css";

function CostDate(props) {
  const year = props.date.getFullYear();
  const month = new Intl.DateTimeFormat("ru-RU", {
    month: "long",
  }).format(props.date);
  const day = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
  }).format(props.date);

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
}

export default CostDate;
