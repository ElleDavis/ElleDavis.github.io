import React from "react";
import "../../App.css";
import "../../components/Cards.css"
import CardItem from '../CardItem';

export default function Products(props) {
  
  return (
    <div className="products" >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Recent Products</h1>
      <div className="imageCard">
      <div>
      <h5>Travel App</h5>
      <CardItem
              src='./images/img-14.jpg'
              text='The Travel Pro was created by a 2-person Development team building a Front-End Application that allows users to prepare for traveling by searching a given city and providing the current weather while also creating a list of local breweries in that area.
              I developed routes using API endpoints, and rendered JSON data and for user access. We used HTML, CSS, JavaScript, jQuery, Postman, AWS, Bootstrap, Google Fonts.
              '
              label='FullStack.'
              // path='/products'
            />
            <h5>ReUnion Project</h5>
            <CardItem
              src='./images/img-12.jpg'
              text='
              Class Re-Union was created by a 3-person Development team building a Full Stack Application that allows users to re-connect with their network of classmates and alumni. Users are able to sign-in, search high schools and receive information for Alumni.
              I developed the login-in feature, along with the user validation for passwords, installed middleware and assisted with database endpoints
              HTML, CSS, JavaScript, jQuery,Node.js, Sequelize ORM, Express, Express-Sessions, Postman, Heroku, Handlebars, Vanta.js
              '
              label='Full-Stack'
              path='/products'
            />
            <h5>ReUnion Project</h5>
            <CardItem
              src='./images/img-13.jpg'
              text='
              All-Ready All-Ready is an Fashion App created to allows users to scroll and save images that match their personal fashion aesthetic. This app will make getting dressed quicker and easier to re-create faboulous looks. I used technologies such as UpSplash, Font Awesome, JavaScript, HTML, CSS, React, Bootstrap, Node, and Postman'
              label='Full-Stack'
              path='/products'
            />
      </div>
            </div>
     
    </div>
  );
}
