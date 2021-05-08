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
                type="button"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://github.com/ElleDavis';
                  }}
              >Connect on Github </Button>
              
              <Button
                className="btns"
                type="button"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='mailto:@shanitricedavis@gmail.com?subject=subject text';
                  }}
              >Connect via Email</Button>

<Button
                className="btns"
                type="button"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://drive.google.com/drive/folders/1sT1zNksA-O_EXfOArpv-u1Z0vOkkZQ2E';
                  }}
              >View my Resume</Button>

              <Button
                type="button"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://www.linkedin.com/in/elle-davis/';
                  }}
            >Connect on LinkedIn</Button>


        </div>
      
      </div>
  )
}