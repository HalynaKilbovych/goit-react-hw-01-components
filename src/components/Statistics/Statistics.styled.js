import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
    width: calc((100% - 30px) / 4);
    padding: 10px;
    background-color: beige;
    border-radius: 3px;
`;

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
`;
export const StatisticsItem = styled.li`
  padding: 15px;
  width: calc(100% / 5);
  background-color: ${getRandomHexColor};
  display: flex;
  gap: 3px;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
`;
export const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: white;
`;
export const Value = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: white;
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }