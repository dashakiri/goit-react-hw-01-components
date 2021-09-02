import PropTypes from "prop-types";
import {
  ProfileContainer,
  Avatar,
  StatsList,
  UserName,
  UserDescription,
  StatListLabel,
  StatListQuantity,
} from "./Profile.styled";

export const UserProfile = ({ name, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <div className="description">
        <Avatar src={avatar} alt="Аватар пользователя" />
        <UserName>{name}</UserName>
        <UserDescription>{tag}</UserDescription>
        <UserDescription>{location}</UserDescription>
      </div>

      <StatsList>
        <li>
          <StatListLabel>Followers</StatListLabel>
          <StatListQuantity>{stats.followers}</StatListQuantity>
        </li>
        <li>
          <StatListLabel>Views</StatListLabel>
          <StatListQuantity>{stats.views}</StatListQuantity>
        </li>
        <li>
          <StatListLabel>Likes</StatListLabel>
          <StatListQuantity>{stats.likes}</StatListQuantity>
        </li>
      </StatsList>
    </ProfileContainer>
  );
};

UserProfile.prototype = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape(
    PropTypes.exact({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    })
  ),
};
