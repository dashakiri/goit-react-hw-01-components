import PropTypes from "prop-types";
import { Section, StatList, ListItem, Title } from "./statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map((item) => {
          return (
            <ListItem key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </ListItem>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
