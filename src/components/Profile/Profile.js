import PropTypes from 'prop-types';
import { ProfileWrapper, Description, Avatar, Name, Tag, Location, StatsList, StatsItem, StatsLabel, StatsQuantity} from './Profile.styled';


export const Profile = ({user}) => { 
    const { username, avatar, tag, location, stats} = user;
    return  (
        <ProfileWrapper>
            <Description>
                <Avatar src={avatar} alt="User avatar"
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <StatsList>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{stats.followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{stats.views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{stats.likes}</StatsQuantity>
                </StatsItem>
            </StatsList>
        </ProfileWrapper> 
    ); 
}


Profile.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    };