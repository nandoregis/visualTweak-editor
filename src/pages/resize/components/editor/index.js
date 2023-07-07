import { styled } from "styled-components";

const Wraper = styled.div`
    width: 100%;
    overflow: auto;
    background-color: ${ ({theme}) => theme.colors.background };
`;


export default () => {
    return(
        <>
            <Wraper>

            </Wraper>
        </>
    );
}