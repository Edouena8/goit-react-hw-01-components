import styled from '@emotion/styled';

const setColor = props => {
    return props.isOnline ? 'green' : 'red';
}

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 10px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 1px 2px 3px 2px #313131;
    background-color: #f7f5f5;

    svg {
        color: ${setColor};
        margin-right: 10px;
    }
`;

export const Avatar = styled.img`
    margin-right: 10px;
`;

export const FriendName = styled.p`
    font-size: 20px;
    font-weight: 600;
`;