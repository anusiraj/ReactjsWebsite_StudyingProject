import React from 'react';
import styled from 'styled-components';
import { Jumbotron } from './components/Jumbotron';

import cupcakes from '../src/assets/cupcakes.jpg';
import macarons from '../src/assets/macarons.jpg';
import tars from '../src/assets/tars.jpg';

const Styles = styled.div`
 
.style1{
text-align:center;
color : black;
position: absolute;
top: 530px;
}

.topContainer{
    position: relative;
    top:500px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .container {
    position: relative;
    top:470px;
    display: flex;
    justify-content: space-evenly;
  }
  
  .container > div {
    width: 250px;
    height: 160px;
    background: pink;
    color : #D52852;
    text-align : center;
  }
  containerbox{
    position: relative;
    top:500px;
    width: 250px;
    height: 160px;
    background: grey;

      
  }
`;

export const Home = () =>(

  <React.Fragment>

 <Jumbotron />  
    <Styles>

    <div className="style1">
        <h2> For some, having stable employment can truly be the sweetest gift of all.</h2> 
        <p>{""}</p>

        <p><b>Can you imagine how hard it would be to live with a chronic illness and hold down a job, 
            not knowing if your health will hold up? Or, if you can juggle your work commitments with 
            medical appointments and fluctuating stress and energy levels?</b></p>
            
        <p>We can tell you - it's not easy. In fact, without an understanding employer, it's impossible.
        The Sweetest Gift aims to be that understanding employer – to support transplant recipients and people 
        living with chronic illnesses by providing a stable, flexible and inclusive workplace – something that 
        many people take for granted. For this group of people though, it can mean the world. 
        The stability of ongoing work gives hope, connection and promotes self-worth.</p>
        <p>{""}</p>

        <p>We’re raising money to open "The Sweetest Gift Dessert Bar" – a social enterprise dessert restaurant – the first of its kind in Australia, where flexibility, support and understanding are as important as eggs, sugar and flour, and this will be given because we live this life too, and truly understand. 
            With your support, we can make this possible for transplant recipients and people with chronic illnesses.</p>
        <p>{""}</p>

        <h2>Will you help us to make their lives a little sweeter? Why not support us!
</h2> 
        
    </div> 

    <div className="topContainer"> 
    <div><img src={cupcakes} height="200" width="200"/></div>
    <div><img src={macarons} height="200" width="200" /></div>
    <div><img src={tars} height="200" width="200" /></div>
   </div>

   <div className="container">
       <div className=".container>div">
            <div><h4>ABOUT</h4></div>
            <div><p>Find out about our charity - our story, our mission and who we really are.</p></div>
       </div>
       <div className=".container>div">
            <div><h4>DONATE</h4></div>
            <div><p>Partner with us and make a positive impact on those we support.</p></div>

       </div>
       <div className=".container>div">
            <div><h4>PARTNERSHIP</h4></div>
            <div><p>Ready to be part of our recipe for good? You can make a donation to our cause.</p></div>

       </div>
      
   </div>
   <div className="containerbox"></div>


  
  
   </Styles>
 


   </React.Fragment>
)