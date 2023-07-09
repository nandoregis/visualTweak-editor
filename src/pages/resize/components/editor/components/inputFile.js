import { styled } from "styled-components";
import Button from '../../../../../components/button';
import Plus from '../../../../../assets/plus.svg';

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Box = styled.div``;

const Input = styled.input`
    display: none;
`;

const Label = styled.label`
    display: inline-block;
`;

export default ({getFile}) => {

    return(
        <Center>
            <Box>
                <Label htmlFor="resize-file-img">
                    <Button
                        text="Escolher imagem"
                        color="#101010"
                        background="white"
                        icon={Plus}
                    />
                </Label>
                <Input onChange={getFile} type="file" id="resize-file-img"/>
            </Box>
        </Center>
    );
}