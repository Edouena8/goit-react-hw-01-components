import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const StatItem = styled.li`
    width: 30%;
    display: flex;
    font-size: 20px;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 10px 20px;
    background-color: ${getRandomHexColor}; 
`;