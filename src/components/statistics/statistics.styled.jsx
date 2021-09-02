import styled from "@emotion/styled";

export const Section = styled.section`
  box-sizing: border-box;
  margin: 10px;
  width: 300px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;

  &:nth-of-type(5n + 1) {
    background-color: #abdee6;
  }

  &:nth-of-type(5n + 2) {
    background-color: #ffffb5;
  }

  &:nth-of-type(5n + 3) {
    background-color: #f3b0c3;
  }

  &:nth-of-type(5n + 4) {
    background-color: #ffc8a2;
  }

  &:nth-of-type(5n + 5) {
    background-color: #cbaacb;
  }
`;
