/* eslint-disable */
import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const TitleStyle = styled.h1`
    font-weight: 600;
    letter-spacing: 1;
    color: #2980b9;
    font-size: 18px;
`;

export const CatImage = styled.img`
    width: 246px;
    height: 273px;
    border-radius: 4px;
`;

export const GoToFeed = styled.div`
    margin-top: 30px;

    a {
        text-decoration: none;
        color: white;
        background: #2980b9;
        font-size: 14px;
        padding: 10px 78px;
        line-height: 40px;
        text-align: center;
        font-weight: 500;
        border-radius: 4px;
        cursor: pointer;
    }
`;