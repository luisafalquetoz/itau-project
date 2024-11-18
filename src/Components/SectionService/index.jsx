import * as C from "./style";
import {ListIten} from "./ListItem"

import Phone from "../../assets/icon-phone.svg";
import Money from "../../assets/icon-solutions.svg";
import Investment from "../../assets/icon-options.svg";
import Card from "../../assets/icon-card.svg";
import ImagePhone from "../../assets/phone.png";


export const SectionSevice = () => {
    return (
        <C.Section>
            <C.Container>
                <C.ContainerLeft>
                    <span>Serviços exclusivos</span>
                    <h2>Gerencie suas finanças sem sair de casa</h2>
                    <C.P>
                        Veja como você pode cuidar das suas finanças pelo App Itaú de forma segura, rápida e o melhor, no conforto da sua casa.
                    </C.P>
                    <C.Ul>
                        <C.Li>
                            <ListIten img={Phone} alt="Ícone telefone" p="Acompanhar sua conta, fazer transferência e pagamentos de onde estiver."/>
                        </C.Li>
                        <C.Li>
                            <ListIten img={Money} alt="Ícone empréstimo" p="Soluções de empréstimos e negociação para organizar suas finanças."/>
                        </C.Li>
                        <C.Li>
                            <ListIten img={Investment} alt="Ícone investidor" p="Diversas opções de investimentos, de acordo com o seu perfil de investidor."/>
                        </C.Li>
                        <C.Li>
                            <ListIten img={Card} alt="Ícone cartão" p="Acompanhe a fatura do seu cartão de crédito e faça compras online com o seu cartão virtual."/>
                        </C.Li>
                    </C.Ul>
                </C.ContainerLeft>
            </C.Container>
            <C.ContainerRight>
                <C.Img src={ImagePhone} alt="Celular" />
            </C.ContainerRight>
        </C.Section>
    )
}