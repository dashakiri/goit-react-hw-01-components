import PropTypes from "prop-types";
import { FriendListUl } from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(({ isOnline, avatar, name, id }) => {
        return (
          <FriendListItem
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            key={id}
          />
        );
      })}
    </FriendListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
