import * as C from "./style";

import AppleStore from "../../assets/btn-apple-store.svg";
import GooglePlay from "../../assets/btn-google-play.svg";
import Arrow from "../../assets/arrow-explorer.svg";
import WomanImage from "../../assets/woman.png";

export const SectionHero = () => {
    return(
        <C.Section>
            <C.Container>
                <C.ContainerLeft>
                    <C.H1>Tenha seu Banco na palma da mão</C.H1>
                    <C.P>Todas as operações que você precisa em um só lugar. Simples, completo e feito para você.</C.P>
                    <C.ContainerButton>
                        <C.Button>
                            <img src={AppleStore} alt="Botão download Apple Store" />
                        </C.Button>
                        <C.Button>
                            <img src={GooglePlay} alt="Botão download Google Play" />
                        </C.Button>
                    </C.ContainerButton>
                    <C.Explorer>
                        <img src={Arrow} alt="Seta" />
                        <span>Continue explorando</span>
                    </C.Explorer>
                </C.ContainerLeft>
                <C.ImageWoman src={WomanImage} alt="Mulher segurando celular" />
            </C.Container>
        </C.Section>
    );
};