import { useEffect, useState } from "react";
import { styled } from "styled-components";


const Img = styled.img`
    transform: scale(0.40);
`;

export default ( {imgUrl, widthImg, heightImg}) => {
    const [imageUrl, setImageUrl] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    useEffect( () => {
        setImageUrl(imgUrl);
        setWidth(widthImg);
        setHeight(heightImg);
    });

    const handleResize = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        
        const img = new Image();
        img.src = imageUrl;
        
        ctx.drawImage(img, 0, 0, width, height);
    
    
        img.onload = () => {
    
          const resizedImageUrl = canvas.toDataURL(); // Obter a URL da imagem redimensionada
    
          // Atualizar a visualização da imagem redimensionada
          setImageUrl(resizedImageUrl);
        };
      };

    return(
        <>  
            <Img src={imageUrl} alt="Resized" />
        </>
    );
}