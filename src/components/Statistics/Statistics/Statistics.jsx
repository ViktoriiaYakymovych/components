import { StatisticsItem } from "../StatisticsItem/StatisticsItem";

export const Statistics = ({stats, title}) => {
    return (
      <section>
        {title ?? <h2>{title}</h2>}

        <ul>
            {stats.map(stat => {
                return (
                  <li key={stat.id}>
                    <StatisticsItem stat={stat}/>
                  </li>
                );
            })}
        </ul>
      </section>
    );
}