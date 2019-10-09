import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cakeImage from '../assets/cakeImage.jpg';

const Styles = styled.div`

.jumbo {
    background: url(${cakeImage})  bottom;
    backgroung-size:cover;
    color : pink;
    height:400px;
    position:relative;
    z-index: -1;

}
.overlay {
    background-color : #222;
    opacity : 0.3;
    position : absolute;
    top : 0;
    left : 0;
    bottom : 0;
    right : 0;
    z-index : -2;
}


`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className = 'jumbo'>
            <div className = "overlay"></div>
            <Container>
                <h2>WELCOME...It's Cake O'Clock!</h2>
                <p2>Baked by Our Family For Your Family...</p2  >

            </Container>
        </Jumbo>
    </Styles>
)
