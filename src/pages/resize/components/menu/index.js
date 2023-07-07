import { styled } from "styled-components";


const Sidebar = styled.div`
    width: 250px;
    height: 100%;
    background-color: ${ ({theme}) => theme.colors.menu};
    padding: 20px;
`

const Wraper = styled.div``;
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const Title = styled.h3`
    color: ${ ({theme}) => theme.colors.text};
    margin-bottom: 10px;
    font-size: 17px;
`
const Text = styled.p`
    color: ${ ({theme}) => theme.colors.text};
    font-size: 15px;
`

const Span = styled.span`
    display: inline-block;
    padding-left: 10px;
`


export default () => {
    return(
        <>
            <Sidebar>
                <Wraper>
                    <Title>Imagem atual</Title>
                    <Wraper>
                        <Box>
                            <Text>Width: <Span>500</Span>  </Text>
                            <Text>pixel</Text>
                        </Box>
                        <Box>
                            <Text>Height: <Span>500</Span>  </Text>
                            <Text>pixel</Text>
                        </Box>
                    </Wraper>
                </Wraper>
                <Wraper>

                </Wraper>
            </Sidebar>
        </>
    );    

}