import React from "react";
import LogoItau from "../../assets/logo.svg"
import UserIcon from "../../assets/icon-user.svg"
import { MenuIten } from "../MenuIten"
import * as C from "./style"

export const Header = () => {
    return (
        <C.Header>
            <C.Container>
                <C.ContainerItens>
                    <div>
                        <C.Image src={LogoItau} alt="Logo Itaú"/>
                    </div>
                    <C.Ul>
                        <li>
                            <MenuIten name="Para você " />
                        </li>
                        <li>
                            <MenuIten name="Para Empresas " />
                        </li>
                        <li>
                            <MenuIten name="Serviços " />
                        </li>
                        <li>
                            <MenuIten name="Ajuda " />
                        </li>
                    </C.Ul>
                    <C.ContainerButton>
                        <C.Button>
                            <img src={UserIcon} alt="Ícone usuário" />
                            <span>Acessar Conta</span>
                        </C.Button>
                    </C.ContainerButton>
                </C.ContainerItens>
            </C.Container>
        </C.Header>
    )
}