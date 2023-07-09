
import { styled } from "styled-components";

const Input = styled.input`
    border: none;
    background: none;
    padding-left: 5px;
    padding-right: 5px;
    outline: none;
    color: ${ ({theme}) => theme.colors.text };
    width: calc( 100% - 10px);
    font-size: 14px;
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export default ({ value, onChange, enter }) => {

    return(
        <>  
            <Input onKeyDown={enter} onChange={onChange} type="number" value={ value }/>
        </>
    );
}