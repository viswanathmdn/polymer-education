import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-button/paper-button.js';




/**
 * @customElement
 * @polymer
 * This component (hotels.js) is used as a page in the application for displaying the hotels listing.
 * This is the first page that is displayed in the application after the user logs in.
 */
class StudentList extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="../css/style-tech.css">
        <style>
            
        </style>

        <iron-ajax
          auto
          id="hotels_list_ajax"
          url="src/studentlist.json"
          params='{"part":"snippet", "q":"polymer", "type": "json"}'
          handle-as="json"
          on-response="handleDataResponse"
          debounce-duration="300">
        </iron-ajax>
      
        <app-header reveals class="etitle">
            <app-toolbar>
            <div main-title >Student-List </div>
            </app-toolbar>
            
        </app-header>

        <div class="div_student_list">
            
            <dom-repeat items="[[studentlist]]">
              <template strip-whitespace="">
              <div class="card">
                
                <div class="div_student_data">
                    <h2 id="titv">[[item.name]]</h2>
                    <span>FirstName:&nbsp&nbsp[[item.fname]]</span><br/>
                    <span>LastName:&nbsp&nbsp[[item.lname]]</span><br/>
                    <span>Description:&nbsp&nbsp[[item.des]]</span><br/>
                    <span>Phone:&nbsp&nbsp[[item.phone]]</span><br/>
                    <span>Email:&nbsp&nbsp[[item.email]]</span>
                </div>
              </div>
              </template>
            </dom-repeat>
          
        </div>
    `;
  }
  static get properties() {
    return {
      studentlist: {
        type: Array,
        value: []
      }
    };
  }

  handleDataResponse(event, request){
    var response = request.response;  
    this.studentlist = response.sdata;
  }
}

window.customElements.define('student-list', StudentList);