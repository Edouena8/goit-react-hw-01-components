import PropTypes from 'prop-types';
import { Avatar, Card, Description, UserName, UserTag, UserLocation, StatusList, StatusItem, StatusLabel,StatusQuantity } from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <Card>
            <Description>
                <Avatar
                    src={avatar}
                    alt={username}
                />
                <UserName>{username}</UserName>
                <UserTag>{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </Description>

            <StatusList>
                <StatusItem>
                    <StatusLabel>Followers</StatusLabel>
                    <StatusQuantity>{stats.followers}</StatusQuantity>
                </StatusItem>
                <StatusItem>
                    <StatusLabel>Views</StatusLabel>
                    <StatusQuantity>{stats.views}</StatusQuantity>
                </StatusItem>
                <StatusItem>
                    <StatusLabel>Likes</StatusLabel>
                    <StatusQuantity>{stats.likes}</StatusQuantity>
                </StatusItem>
            </StatusList>
        </Card>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};