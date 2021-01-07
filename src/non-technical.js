import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/polymer/lib/elements/array-selector.js';


class NonTechnical extends PolymerElement {
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

        <!-- Header -->
        <app-header reveals style="color:white;background-color:blue;text-align:center">
        <app-toolbar>
                    
         
          <div main-title style="text-align:center"> Non-Technical Skills</div>
        </app-toolbar>
        
      </app-header>



<!-- Navigation Bar -->
<div class="navbar">
  <a href="https://en.wikipedia.org/wiki/Soft_skills" target="_blank">Soft Skills</a>
  <a href="https://www.mindtools.com/pages/article/newLDR_41.htm" target="_blank">Leadership</a>
  <a href="https://en.wikipedia.org/wiki/Sport" target="_blank">Sports</a>
  <a href="https://en.wikipedia.org/wiki/Acting#:~:text=Acting%20is%20an%20activity%20in,use%20of%20the%20mimetic%20mode." target="_blank">Acting</a>
</div>

<!-- The flexible grid (content) -->
<div class="row">
 
  <div class="main">
    <h2>Non-Technical</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <div>
    <img src="images/nont.png" style="width:100%;height:300px">
    </div>
    <p >Technical skills are the abilities and knowledge needed to perform specific tasks. They
    are
    practical, and often relate to mechanical, information technology, mathematical, or scientific tasks.
    Some examples include knowledge of programming languages, design programs, mechanical equipment, or tools
  </p>  <p><a href="">more...</a></p>
    </div>
</div>

<!-- Footer -->
<div class="footer">
<p>2020 - 2021 Copyrights by <a href="#">Viswa</a>. Designed & Maintanined by <a href="#">Viswa</a></p>
</div>



     
    `;
    }




   
}

window.customElements.define('non-technical', NonTechnical);