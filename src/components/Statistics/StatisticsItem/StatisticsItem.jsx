export const StatisticsItem = ({stat: {label, percentage}}) => {
    return (
      <>
        <span>{label} </span>
        <span>{percentage} %</span>
      </>
    );
}