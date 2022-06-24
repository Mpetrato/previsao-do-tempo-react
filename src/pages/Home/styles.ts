import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #4285F4;
`

export const HomeWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #FFF;
    margin-top: 150px;

    & > h4 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 12px;
    }

    & > h1 {
        font-size: 36px;
        font-weight: bold;
    }
`