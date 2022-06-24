import { style } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
export const ForecastWrapper = styled.div`
    margin: 0 auto;
    padding: 40px;
    border: 5px solid #FFF;
    border-radius: 65px;
    max-width: 1400px;
`
export const Header = styled.div`
    flex: 1;
    color: white;

    & > h3 {
        font-size: 36px;
        font-weight: 400;
    }
    & > h1 {
        font-size: 64px;
        font-weight: bold;
    }

`
export const InfoWrapper = styled.div`
    display: flex;
    margin-top: 80px;
    flex: 1;
`
export const Infos = styled.div`
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex: 1; */
    display: flex;
    flex-wrap: wrap;
`
export const Info = styled.div`
    background-color: white;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 30px;
    width: 350px;
    margin-right: 40px;

    & > span {
        color: rgba(0, 0, 0, 0.5);
        font-size: 16px;
        font-weight: 600;
    }

    & > span:last-child {
        margin-left: auto;
        color: black;
    }

    & > svg {
        width: 32px;
        height: 32px;
        color: black;
        margin-right: 12px;
    }
`
export const TempActual = styled.div `
    margin-left: 100px;
    display: flex;
    flex-direction: column;
`
export const MaxWrapper = styled.div`
    color: white;

    & > span:first-child {
        font-size: 64px;
        font-weight: 600;
    }
    & > span:last-child {
        font-size: 26px;
    }
`
export const MinWrapper = styled.div`
    color: white;
    margin-left: 80px;
    
    & > span:first-child {
        font-size: 64px;
        font-weight: 600;
    }
    & > span:last-child {
        font-size: 26px;
    }
`

export const TempWrapper = styled.div`
    display: flex;
`

export const Footer = styled.div`
    margin-top: auto;
    padding: 40px;

    & > span {
        color: white;
        font-size: 20px;

    }

`