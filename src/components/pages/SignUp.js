import React from 'react';
import '../../App.css'
import {Button }from "../Button";

 
export default function SignUp() {
    return (
      <div className="sign-up">
        <h1>Contacts</h1>
         <div>
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                href="https://elledavis.github.io/"
              > Connect on Github </Button>
              
              <Button
                className="btns"
                href="mailto:@shanitricedavis@gmail.com?subject=subject text"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >Connect via Email</Button>

              <Button
                className="btns"
                href="https://www.linkedin.com/in/elle-davis/"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >Connect on LinedIn</Button>


        </div>
      
      </div>
  )
}