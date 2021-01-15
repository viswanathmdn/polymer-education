import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';

import '@polymer/paper-button/paper-button.js';



class Register extends PolymerElement {
    static get template() {
        return html `
     
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .btnr{
          background:blue;
          color:white;
          margin-top: 14px;
        }
      </style>

      <!--- title start -->
      <div class="card">
        <h1>Add Student Details</h1>
      </div>
      <!--- title End -->

      <!--- Main Content start -->
      <div class="card">
        <!--- Iron Form Start--->

        <div >
          <h3 id="svalid"></h3>
        </div>

        <iron-form>
          <form  id = "empforms"  name="empforms">
        
              <paper-input label="Enter First Name" name="fname" id="fname" required auto-validate 
               error-message="First Name must be filled out"></paper-input>
            
              <paper-input label="Enter Last Name" name="lname" id="lname" required auto-validate 
              error-message="Last Name must be filled out"></paper-input>
     
              <paper-input label="Enter course" name="course" id="des" required auto-validate 
              error-message="Course must be filled out"></paper-input>

              <paper-input label="Enter phone number" name="phone" id="phone" required  
              auto-validate pattern="[0-9]*" error-message="Phone number must be filled out" 
              maxlength="10"></paper-input>
     
              <paper-input type="email" label="Enter email" name="email" id="email" required 
              auto-validate error-message="Email must be filled out"></paper-input>
             
        
              
              <paper-button raised on-click="addemp" class="btnr">Register</paper-button>


          </form>
        </iron-form>

        <!--- Iron Form End--->
      </div>
      <!--- Main Content End -->
    `;
    }
    addemp() {
        /**  get value from */
        var fname = this.$.fname.value;
        var lname = this.$.lname.value;
        var des = this.$.des.value;
        var phone = this.$.phone.value;
        var email = this.$.email.value;

        /**  Storing array data to local storage */
        /**  Nullchecking */
        if (fname != "" && lname != "" && des != "" && phone != "" && email != "") {
            var existingEntries = JSON.parse(localStorage.getItem("All-Entries"));
            if (existingEntries == null) existingEntries = [];
            var stulist = [];

            /** Incrementing SL no and pushing in the array */
            var slno = existingEntries.length + 1;
            stulist.push(slno, fname, lname, des, phone, email)
            window.localStorage.setItem('Current-Entry-List', JSON.stringify(stulist));
            existingEntries.push(stulist);
            window.localStorage.setItem("All-Entries", JSON.stringify(existingEntries));
            window.alert("Student Added Sucessfully");
            window.location.reload();
        }
        else{
          this.$.svalid.innerHTML = " Invalid Credentials";
          this.$.svalid.style.color="red";
        }
    }
}

window.customElements.define('my-register', Register);