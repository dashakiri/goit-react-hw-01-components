import PropTypes from "prop-types";
import { FriendLi, Image, Span } from "./FriendLi.styled";

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendLi>
      <Span status={isOnline}></Span>
      <Image src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendLi>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
