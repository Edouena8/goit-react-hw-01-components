import PropTypes from 'prop-types';
import { FriendItem, Avatar, FriendName } from './FriendListItem.styled';
import { FaCircle } from 'react-icons/fa';
import { iconSize } from 'components/contants';

export const FriendListItem = ({id, avatar, name, isOnline}) => {
    return  (
        <FriendItem key={id} isOnline={isOnline}>
            <FaCircle sixe={iconSize.sm}/>
            <Avatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    )
};

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

