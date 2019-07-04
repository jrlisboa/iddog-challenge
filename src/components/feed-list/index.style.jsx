/* eslint-disable */
import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

export const ImageItem = styled.div`
    width: 200px;
    height: 200px;
    margin: 20px 20px;
    border-radius: 4px;
    background: #CCCCCC url(${props => props.src}) center;
    background-size: 150%;
    cursor: pointer;
    border: 1px solid rgba(188, 202, 203, 0.2);
    transition: 150ms ease-out;
    
    &:hover {
        margin-top: 20px;
        box-shadow: 0px 10px 10px rgba(0,0,0,0.17);
    }
`;
