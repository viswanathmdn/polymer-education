import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';
import '@polymer/polymer/lib/elements/array-selector.js';


class StudentList extends PolymerElement {
    
    static get template() {
        return html `

    <script src="/node_modules/material-design-lite/material.min.js"></script>
    

      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      
      <!--- title start -->
      <div class="card">
        <h1>Student List</h1> 
      </div>
      <!--- title end -->

      <!-- iron-ajax start here-->
      <iron-ajax
          auto
          url="src/studentlist.json"
         handle-as="json"
          on-response="handleStudentResponse">
        </iron-ajax>
      
      <div class="card">
        <div class="mdl-grid">
          <div class="table-responsive">
          <!--- Table start -->
            <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
              <thead>
                <tr>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">S.No</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">First Name</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">Last Name</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">Branch</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">Phone Number</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">Email</th>
                  <th scope="col" class="mdl-data-table__cell--non-numeric">Action</th>
                </tr>
              </thead>
              <!--- Dom Repeat started -->
              <template is="dom-repeat" items="{{user.stulist}}" id="employeeList" > 
                <tbody>
                  <tr class="item">
                    <td class="mdl-data-table__cell--non-numeric">[[item.0]]</td>
                    <td class="mdl-data-table__cell--non-numeric">[[item.1]]</td>
                    <td class="mdl-data-table__cell--non-numeric">[[item.2]]</td>
                    <td class="mdl-data-table__cell--non-numeric">[[item.3]]</td>
                    <td class="mdl-data-table__cell--non-numeric">[[item.4]]</td>
                    <td class="mdl-data-table__cell--non-numeric">[[item.5]]</td>
                    <td><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" on-click="delete" >Delete </button> </td>
                  </tr>
                </tbody>
              </template>
              <!--- Dom Repeat End -->
                <array-selector id="selector" items="{{user.stulist}}" selected="{{selected}}" multi toggle></array-selector>
            </table>
            <!--- Table end -->
          </div>
        </div>
      </div>
     
    `;
    }
    static get properties() {
      return {
        studlist: {
          type: Array,
          value: []
        },
          user: {
              type: Object,
              value: function() {
                  // Get array data from Local Storage 
                  var stulist = JSON.parse(window.localStorage.getItem('All-Entries'));
                  return {
                      stulist
                  };
              }
          }
      };
  }


    // Data delete from local storage
    delete(e) {
        const index = e.model.__data.index;
        var item = e.model.__data.item;
        var data = JSON.parse(window.localStorage.getItem('All-Entries'));
        console.log(data);
        data.splice(index, 1);
        window.localStorage.setItem("All-Entries", JSON.stringify(data));
        window.alert("Student Deleted Sucessfully");
        window.location.reload();
    }
    handleStudentResponse(event, request){
      var response = request.response;  
      this.studlist = response.sdata;
      console.log(this.studlist);
    }


}

window.customElements.define('student-list', StudentList);