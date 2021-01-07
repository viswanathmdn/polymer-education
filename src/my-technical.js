import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@google-web-components/google-chart';

import './shared-styles.js';

class MyTechnical extends PolymerElement {
    static get properties() {
        return {
           
        };

    }
    static get template() {
        return html `
    <style>
    * {
      box-sizing: border-box;
    }
    
    /* Style the body */
    body {
      font-family: Arial;
      margin: 0;
    }
    
    /* Header/logo Title */
    .header {
      padding: 60px;
      text-align: center;
      background: #1abc9c;
      color: white;
    }
    
    /* Style the top navigation bar */
    .navbar {
      display: flex;
      background-color: #333;
    }
    
    /* Style the navigation bar links */
    .navbar a {
      color: white;
      padding: 14px 20px;
      text-decoration: none;
      text-align: center;
    }
    
    /* Change color on hover */
    .navbar a:hover {
      background-color: #ddd;
      color: black;
    }
    
    /* Column container */
    .row {  
      display: flex;
      flex-wrap: wrap;
    }
    
    /* Create two unequal columns that sits next to each other */
    /* Sidebar/left column */
    .side {
      flex: 30%;
      background-color: #f1f1f1;
      padding: 20px;
    }
    
    /* Main column */
    .main {
      flex: 70%;
      background-color: white;
      padding: 20px;
    }
    
    /* Fake image, just for this example */
    .fakeimg {
      background-color: #aaa;
      width: 100%;
      padding: 20px;
    }
    
    /* Footer */
    .footer {
      padding: 20px;
      text-align: center;
      background: #ddd;
    }
    
    /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 700px) {
      .row, .navbar {   
        flex-direction: column;
      }
    }
    </style>
    <app-header reveals style="color:white;background-color:blue;text-align:center">
    <app-toolbar>
                
     
      <div main-title style="text-align:center">[[skill]] </div>
    </app-toolbar>
    
  </app-header>
  



<!-- Navigation Bar -->
<div class="navbar">
  <a href="https://www.w3schools.com/html/default.asp" target="_blank">Html</a>
  <a href="https://www.w3schools.com/css/css3_flexbox_responsive.asp" target="_blank">CSS</a>
  <a href="https://www.w3schools.com/js/default.asp" target="_blank">Javcsript</a>
  <a href="https://www.w3schools.com/bootstrap4/default.asp" target="_blank">Bootstrap</a>
</div>

<!-- The flexible grid (content) -->
<div class="row">
 
  <div class="main">
    <h2>Technical Skills</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <div>
    <img src="images/tech.jpeg" style="width:100%;height:300px">
    </div>
   
    <p >Technical skills are the abilities and knowledge needed to perform specific tasks. They
    are
    practical, and often relate to mechanical, information technology, mathematical, or scientific tasks.
    Some examples include knowledge of programming languages, design programs, mechanical equipment, or tools
  </p> <p><a href="">more...</a></p>
    </div>
</div>

<!-- Footer -->
<div class="footer">
<p>2020 - 2021 Copyrights by <a href="#">Viswa</a>. Designed & Maintanined by <a href="#">Viswa</a></p>
</div>

    
    `;
    }
    static get properties() {
      return {
        skill: {
          type: String,
          value: "Technical-Skills"
          
        },
       
      };
    }

}

window.customElements.define('my-technical', MyTechnical);