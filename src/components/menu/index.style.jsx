/* eslint-disable */
import styled from 'styled-components';

export const MenuWrapper = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    background: white;

    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 0 20px;
    }
`;
    
export const Item = styled.div`
    font-size: 12px;
    color: #878787;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 6px;
    cursor: pointer;
    text-align: center;
    padding-bottom: 30px;
    border-bottom: ${props => props.active ? '2px solid #878787' : 'none'};

    @media screen and (max-width: 800px) {
        font-size: 11px;
        letter-spacing: 1px;
    }

    &:hover {
        color: #515151;
    }
`;