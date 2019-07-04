/* eslint-disable */
import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 410px;
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.03);
    border: 1px solid rgba(188, 202, 203, 0.2);
    border-radius: 4px;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
`;

export const ButtonStyle = styled.div`
    right: 10px;
    height: 30px;
    width: 50px;
    line-height: 30px;
    margin-top: 7px;
    text-align: center;
    border: none;
    color: #FFFFFF;
    background: #2980b9;
    border-radius: 4px;
    margin-left: -60px;
    cursor: pointer;
    opacity: 0;
    transition: 200ms ease-out;

    ${props => !props.focus || `opacity: 1;`}
    ${props => {
        return !props.disabled || `
            cursor: not-allowed;
            background: #CCCCCC;
        `;
    }}
`;
