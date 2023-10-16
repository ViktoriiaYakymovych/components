import { StatisticItem } from "./StatisticsItem.styled";

export const StatisticsItem = ({stat: {label, percentage}}) => {
    return (
      <StatisticItem>
        <span>{label} </span>
        <span>{percentage} %</span>
      </StatisticItem>
    );
}