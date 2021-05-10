import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
 
export default function Services() {
    
    return(
        <div className="services">
          <br></br>
          <br></br>
            <h1>Services and Technologies</h1>
            <div className="icons">
            
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              {/* Makes Cards Link */}
              <CardItem
              src='/images/img-15.jpg'
              text='HTML'
              label='HTML'
            //   path='/products'
            />
           
            <CardItem
              src='/images/img-17.jpg'
              text='CSS'
              label='CSS'
            //   path='/products'
            />
            <CardItem
              src='/images/img-18.jpg'
              text='JS'
              label='Javascript'
            //   path='/products'
            />
            <CardItem
              src='./images/node-transparent.png'
              text='Node'
              label='Node.js'
            //   path='/products'
            />
             <CardItem
              src='/images/pg.png'
              text='Postgres/PgAdmin'
              label='Postgres Database'
            //   path='/products'
            /><CardItem
              src='/images/npm.png'
              text='Node package Manager'
              label='NPM'
            //   path='/products'
            />
          </ul>
          {/* Makes card links */}
          <ul className='cards__items'>
            <CardItem
              src='./images/react logo.png'
              text='Use for Full-Stack Applications'
              label='React/Redux'
            //   path='/services'
            />
            <CardItem
              src='/images/bootstrap.jpeg'
              text='Use for responsiveness'
              label='BootStrap'
            //   path='/products'
            />
            <CardItem
              src='./images/img-22.png'
              text='Use for Version Contol'
              label='GitHub'
            //   path='/services'
            />
            <CardItem
              src='./images/img-16.jpg'
              text='For Deployment'
              label='Deployment'
            //   path='/services'
            />
            <CardItem
              src='/images/img-3.jpg'
              text='Check-out my Travel App'
              label='Databases'
            //   path='/products'
            />
            <CardItem
              src='/images/jason.jpeg'
              text='Check-out my Travel App'
              label='JSON/JSX'
            //   path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
</div>
   
    )
}