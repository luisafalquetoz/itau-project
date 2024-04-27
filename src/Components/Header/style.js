import styled from "styled-components";

export const Header = styled.header `
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 80px;
    background-color: #ff6200;
`;

export const Container = styled.div `
    width: 100%;
`;

export const ContainerItens = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1246px;
    padding: 0 15px;
    margin: 0 auto;
`;

export const Image = styled.img `
    display: flex;
    align-items: center;
    margin: 0 20px;
    cursor: pointer;
`; 

export const Ul = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 0 20px 0 0;

    li {
        list-style: none;
    }
`;

export const ContainerButton = styled.div `
    display: flex;
    align-items: center;
    height: 70%;
    padding: 0 20px;
    background-color: #106eb0;
    cursor: pointer;
    border-radius: 3px;
`;

export const Button = styled.button `
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    gap: 5px;
    color: white;
    font-weight: bold;
    height: 100%;
    cursor: pointer;
`;