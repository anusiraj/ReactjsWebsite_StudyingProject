import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

.style {
  background-color: black;
  text-align: center;
  color : pink;
  padding: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 300px;
    width: 100%;

}
.style2 {
  display: block;
  position: absolute;
    top:1539px;

  padding: 20px;
  height: 60px;
  width: 100%;
}
.flex{
  display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

`;

export const Footer = ()  => (
  <Styles>
          
<div className="style2">
    <div className="style">
      <div class  ="flex">
       
        <div><h2>The Cake Shop</h2>
        <p>About Us</p>
        <p>Kidz Cakes</p>
        <p>Fun Cakes</p>
        <p>Cakes based on Events</p>
        <p>Contact</p></div>

        <div><h2>We Accept</h2>
        <p>Use our online ordering system and use your</p><p>credit card or paypal account with confidence.</p>
<p>Alternatively, pay upon delivery for</p> <p>products you order online.</p></div>
        
        <div><h2>Contact Us</h2>
        <p>You can call (9AM - 10PM)</p>
        <p>+358 41 3651884</p>
        <p>You can email (00AM - 00PM)</p>
        <p>anusiraj007@gmail.com</p></div>
        
        <div><h2>Follow Us</h2>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p></div>
       
      </div>
  </div>  

 </div>
  </Styles>
)
