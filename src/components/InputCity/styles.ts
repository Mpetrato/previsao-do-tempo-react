import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    padding: 12px 20px;
    margin-top: 40px;
    

    .inputWrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 580px;
    }

    .inputWrapper input {
        background-color: transparent;
        border: none;
        font-size: 20px;
        margin-left: 18px;
        flex: 1;
        outline: none;
    }

    .inputWrapper input::placeholder {
        color: rgba(0, 0, 0, .7);
    }

    .inputWrapper svg {
        color: black;
        width: 36px;
        height: 36px;
    }
`