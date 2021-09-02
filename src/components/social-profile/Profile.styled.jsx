import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  margin: 10px;
  padding: 30px;
  width: 250px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 10px;
  line-height: 1;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const UserDescription = styled.p`
  font-size: 16px;
  color: grey;
`;

export const StatListLabel = styled.span`
  margin-right: 20px;
  font-size: 18px;
  color: grey;
`;

export const StatListQuantity = styled.span`
  display: block;
  margin-top: 5px;
  margin-right: 20px;
  font-weight: 500;
  font-size: 16px;
`;
