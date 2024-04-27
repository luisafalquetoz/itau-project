import * as C from "./style";

export const ListIten = ({img, alt, p}) => {
    return (
        <>
            <C.Mascara>
                <img src={img} alt={alt} />
            </C.Mascara>
            <p>{p}</p>
        </>
    );
};
