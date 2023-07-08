
import { useState, useEffect } from "react";
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

export default ({ initValue }) => {
    
    const [resize, setResize] = useState();
    const [initResize, setInitResize] = useState();

    useEffect( () => {
        setResize(initValue);
    }, [initValue]);

    const handleInput = (e) => {
        let inputValue = e.target.value;
        let resizeValue = inputValue.replace('e', '');
        setResize(resizeValue);
    }

    return(
        <>
            <Input  onChange={handleInput} type="number" value={ resize }/>
        </>
    );
}