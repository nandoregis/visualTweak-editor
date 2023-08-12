import { useEffect, useState } from "react";
import { styled } from "styled-components";
import IconResizeWidth from '../../../../../assets/icon_resize_width.svg';
import IconResizeHeight from '../../../../../assets/icon_resize_height.svg'

const Box = styled.div`
    position: absolute;
`;

const Boll = styled.div`
    background: #00FFF0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;

const LineW = styled.div`
    background: #00FFF0;
    position: absolute;
    width: 2px;
`;

const LineH = styled.div`
    background: #00FFF0;
    position: absolute;
    height: 2px;
`;

const Icon = styled.img``;

const Feedback = styled.div`
    position: absolute;
    top: 100px;
    left: 5px;
    background: #f9f9f9;
    color: #505050;
    padding: 10px;
`;

export default ({width, height, getChildState}) => {

    // States
    const [widthImg, setWidthImg] = useState(0);
    const [heightImg, setHeightImg] = useState(0);
    
    const [moveY, setMoveY] = useState(0);
    const [moveX, setMoveX] = useState(0);
    const [moveLineW, setMoveLineW] = useState(false);
    const [moveLineH, setMoveLineH] = useState(false);

    const [moveXLimit, setMoveXLimit] = useState(0);
    const [moveYLimit, setMoveYLimit] = useState(0);
    
    const [posLineFixedWidth, setPosLineFixedWidth] = useState(0);
    const [posLineFixedHeight, setPosLineFixedHeight] = useState(0);

    const [valueFeedbackWidth, setValueFeedbackWidth] = useState(null);

    // variaveis normais.
    const paddingLine = -20; // espaçamento para Linhas n ficarem coladas é mais por estetica 

    /**
     *  Essas constantes serve para pegar de posicionamento da imagem para manipulação da animação do item resizeBoll.
     */
    const menuWidth = 250; // largura do menu da pagina
    const headerHeight = 70; // altura do header da pagina
    const divWidth = window.innerWidth - menuWidth; 
    const divHeight = window.innerHeight - headerHeight; 
    
    const positionInitImgX = Math.ceil((divWidth - widthImg) / 2);
    const positionInitImgY = Math.ceil((divHeight - heightImg) / 2);
    //-------

    useEffect( () => {
        setWidthImg(width);
        setHeightImg(height);    
    }, [height, width]);

    useEffect( () => {

        const moverMouse = (e) => {
            setMoveX(e.x);
            setMoveY(e.y);
        }

        window.addEventListener('mouseover', moverMouse );

        return () => {
            window.removeEventListener('mouseover', moverMouse);
        }

    }, []);

    const handleMoveLineWidth = (e) => {
        
        setMoveLineW(!moveLineW);
        setMoveXLimit(e.clientX);
        setPosLineFixedWidth(moveX);
        
        moveLineW && modifyWidthImage();

    }

    const modifyWidthImage = () => {
        let valueDiference = 0;
        let valueWidthImg = widthImg; 
        
        if( moveX < moveXLimit ) 
        {
            valueDiference = moveXLimit - moveX;
            valueWidthImg = widthImg + valueDiference;

        } else if( moveX > moveXLimit ) 
        { 
            valueDiference = moveX - moveXLimit;
            valueWidthImg = widthImg - valueDiference;
        }

        getChildState(valueWidthImg, heightImg);
        setPosLineFixedWidth(0);
    }

    const  handleMoveLineHeight = (e) => {

        setMoveLineH(!moveLineH);
        setMoveYLimit(e.clientY);
        setPosLineFixedHeight(moveY);

        moveLineH && modifyHeightImage();
    }

    const modifyHeightImage = ()=> {

        let valueDiference = 0;
        let valueHeightImg = heightImg;

        if (moveY < moveYLimit) {
            valueDiference = moveYLimit - moveX;
            valueHeightImg = heightImg + valueDiference;

        } else if( moveY > moveYLimit) {
            valueDiference = moveY - moveYLimit;
            valueHeightImg = heightImg - valueDiference;
        }
        
      
        getChildState(widthImg, valueHeightImg);
        setPosLineFixedHeight(0);
    }

   return(
    <>  

        {
            widthImg && heightImg &&
            <>
                <Box style={{
                        top: paddingLine,
                        left: moveLineW ? moveX - positionInitImgX : posLineFixedWidth,
                }}>
                    <Boll 
                        style={{
                            left: -10,
                            top: -20,
                        }}
                        onClick={handleMoveLineWidth}
                    >
                        <Icon src={IconResizeWidth}/>
                    </Boll>
                    <LineW style={{
                        height: heightImg + Math.abs(paddingLine),
                    }} />


                    { valueFeedbackWidth && 

                        <Feedback>
                            {valueFeedbackWidth}
                        </Feedback>
                    }

                </Box>

                <Box style={{
                        left: paddingLine,
                        top: moveLineH ? moveY - positionInitImgY - 70 : posLineFixedHeight,
                }}>
                    <Boll
                        style={{
                            left: -20,
                            top: -10,
                        }}
                        onMouseDown={handleMoveLineHeight}
                    >
                        <Icon src={IconResizeHeight}/>
                    </Boll>
                    <LineH style={{
                        width: widthImg + Math.abs(paddingLine),
                    }} />
                </Box>
            
            </>
        }

    </>
   ); 
}