import ArrowDown from "../../assets/arrow-down.svg"
import { Button } from "./style";

export const MenuIten = ({name}) => {
    return (
        <>
            <Button>
                <span>{name}</span>
                <img src={ArrowDown} alt="Seta" />
            </Button>
        </>
    );
};