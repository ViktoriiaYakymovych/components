import { StatisticsWrapper, StatisticsList } from './Statistics.styled';

import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsWrapper>
      {title ?? <h2>{title}</h2>}

      <StatisticsList>
        {stats.map(stat => {
          return (
            <li key={stat.id}>
              <StatisticsItem stat={stat} />
            </li>
          );
        })}
      </StatisticsList>
    </StatisticsWrapper>
  );
};
