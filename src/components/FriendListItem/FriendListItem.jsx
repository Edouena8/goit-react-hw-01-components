import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({id, avatar, name, isOnline}) => {
    return  (
        <li className={css.item} key={id}>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

