import styled from "@emotion/styled";

export const FriendLi = styled.li`
  margin-top: 15px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

export const Image = styled.img`
  margin-right: 15px;
`;

export const Span = styled.span`
  margin-right: 15px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.status ? "green" : "red")};
`;
