import React from "react"
import styled from "styled-components/macro";
import "typeface-lato"
import Paragraph from '../text/Paragraph'
import { breakpoints } from '../Breakpoints'

const Sticker =  styled.span`
display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
margin: auto;
z-index: 5;
width: 130px;
height: 130px;
border-radius: 50%;
transition: 0.2s 0.2s;
transform: translate3d(10px, 20px, 0) scale(1.5) rotate(-45deg);
opacity: 0;

.back,
.front {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.35s;
    
    &:before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    transition: 0.35s;
    }
}

.front {
    height: 0;
    
    .content {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 130px;
    height: 130px;
    transform: rotate(45deg);
    background: #0077ff;
    color: #fff;
    line-height: 130px;
    font-size: 0.8em;
    text-align: center;
    border-radius: 50%;
    }
}

.back {
    top: 130px;
    overflow: hidden;
    
    &:before {
    background-color: #d2d2d2;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.4);
    top: 0;
    }
}
`;

const Wrapper = styled.div`
width: 300px;
height: 400px;
box-shadow: 0 0 10px -5px #000;
border-radius: 5px;
margin: auto;
position: relative;

&:hover ${Sticker} {
    transform: translate3d(0, 0, 0) scale(1) rotate(-45deg);
    transition-delay: 0s;
    opacity: 1;

    .front {
    height: 130px;
    }

    .back {
    top: 0;

    &:before {
        top: -130px;
    }
    }
}
`;

const StickerWrapper = () => {

    return (
        <Sticker>
            <span className="front">
                <span className="content">
                    <Paragraph>Open for work</Paragraph>
                </span>
            </span>
            <span className="back"></span>
        </Sticker>
    )
}

export default StickerWrapper;