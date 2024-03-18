const Job = (props) => {
  let tiret = "";
  if (props.city) {
    tiret += " - ";
  }
  return (
    <div className={"job " + props.color}>
      <h3>
        {props.title}
        {tiret}
        {props.city}
      </h3>
      <p>
        {props.contractType}
        {tiret}
        {props.country}
        {tiret}
        {props.city}
      </p>
    </div>
  );
};

export default Job;
