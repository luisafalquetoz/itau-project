import * as C from "./style";

export const ListIten = ({p, img, alt}) => {
    return (
        <>
            <C.Mascara>
                <img src={img} alt={alt} />
            </C.Mascara>
            <p>{p}</p>
        </>
    );
};
