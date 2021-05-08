import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Current Projects and Technologies Services !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              {/* Makes Cards Link */}
            <CardItem
              src='/images/img-14.jpg'
              text='Check-out my Travel App'
              label='Full-Stack'
              path='/products'
            />
            <CardItem
              src='/images/img-12.jpg'
              text='Check-out my Reunion App'
              label='Full-Stack'
              path='/products'
            />
            <CardItem
              src='./images/img-13.jpg'
              text='Check-out my Fashion App'
              label='Full-Stack'
              path='/products'
            />
          </ul>
          {/* Makes card links */}
          <ul className='cards__items'>
            <CardItem
              src='./images/img-10.jpg'
              text='I have experience using React and Redux for Full-Stack Applications'
              label='React/Redux'
              path='/services'
            />
            <CardItem
              src='./images/img-19.jpg'
              text='I use git hub to support Project Version Contol'
              label='GitHub'
              path='/services'
            />
            <CardItem
              src='./images/img-16.jpg'
              text='I have deployed Full-stack apps with Git hub pages, Heroku and Amazon AWS Buckets and EC2'
              label='Deployment'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;