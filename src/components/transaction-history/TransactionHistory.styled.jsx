import styled from "@emotion/styled";

export const Table = styled.table`
  width: 500px;
  text-align: center;
`;

export const TableHead = styled.thead`
  background-color: #3d5a80;
  color: white;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: lightgrey;
  }
`;
