/* eslint-disable */
import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
`;

export const InputStyle = styled.input`
    width: 100%;
    padding: 0 70px 0 12px;
    border-radius: 4px;
    height: 45px;
    font-size: 14px;
    border: 2px solid ${props => props.error ? '#e74c3c' : '#ccc'};
`;