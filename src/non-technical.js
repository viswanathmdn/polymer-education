import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/polymer/lib/elements/array-selector.js';
import './style-element.js';


class NonTechnical extends PolymerElement {
   
    static get template() {
        return html `
        <link rel="stylesheet" href="../css/style-tech.css">
        <style >
       </style>

        <!-- Header -->
        <app-header reveals class="etitle" >
        <app-toolbar>
                    
         
          <div main-title > [[skill]]</div>
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
  </p>  <p><a target="_blank" href="https://www.arpansa.gov.au/regulation-and-licensing/safety-security-transport/holistic-safety/non-technical-skills#:~:text=Non%2DTechnical%20Skills%20('NTS,%3B%20and%20situation%2Dawareness%20skills.&text=However%2C%20they%20complement%20these%20technical,them%20more%20efficient%20and%20effective.">
  more...</a></p>
    </div>
</div>

<!-- Footer -->
<div class="footer">
<p>2020 - 2021 Copyrights by <a href="#">Viswa</a>. Designed & Maintanined by <a href="#">Viswa</a></p>
</div>



     
    `;
    }

    // This is properties section

    static get properties() {
      return {
        skill: {
          type: String,
          value: "Non-Technical Skills"
          
        },
       
      };
    }




   
}

window.customElements.define('non-technical', NonTechnical);