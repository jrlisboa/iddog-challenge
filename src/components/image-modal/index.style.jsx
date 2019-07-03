/* eslint-disable */
import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from {
        opacity: 0;
        margin-top: -30px;
    }

    to {
        opacity: 1;
        margin-top: 0px;
    }
`;

export const fadeOut = keyframes`
    from {
        opacity: 1;
        margin-top: 0px;
    }

    to {
        opacity: 0;
        margin-top: -30px;
    }
`;

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
`;

export const ImageWrapper = styled.div`
    height: 400px;
    border-radius: 4px;
    display: flex;
    animation: ${props => props.fade} 350ms ease-out;
`;

export const Image = styled.img`
    height: 100%;
    border-radius: 4px;
    border: 14px solid #f7f7f7;
    border-bottom: 60px solid #f7f7f7;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.17);
`;