import { styled } from "styled-components";

const Wraper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    background: white;
    padding: 0 12px;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
`;

const Text = styled.p`
    padding-left: 5px;
`;

export default ( {icon, text, color, background, width }) => {
    return(
        <>
            <Wraper style={{
                width: width,
                background: background
            }}>
                <img src={icon}/>
                <Text style={{
                    color: color,
                }}>{text}</Text>
            </Wraper>
        </>
    );
}