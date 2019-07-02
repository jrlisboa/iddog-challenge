/* eslint-disable */
import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px;
`;

export const ImageItem = styled.div`
    width: 200px;
    height: 200px;
    margin: 30px 10px;
    border-radius: 4px;
    background: #CCCCCC url(${props => props.src}) center;
    cursor: pointer;
    border: 1px solid rgba(188, 202, 203, 0.2);
    transition: 150ms ease-out;
    
    &:hover {
        margin-top: 20px;
        box-shadow: 0px 10px 20px rgba(0,0,0,0.3);
    }
`;
