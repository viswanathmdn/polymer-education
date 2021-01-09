import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@google-web-components/google-chart';

import './shared-styles.js';

class MyTechnical extends PolymerElement {
   
    static get template() {
        return html `
        <link rel="stylesheet" href="../css/style-tech.css">
    <style>
    
    </style>
    <app-header reveals class="etitle">
    <app-toolbar>
                
     
      <div main-title >[[skill]] </div>
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