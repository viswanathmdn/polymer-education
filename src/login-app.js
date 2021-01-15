import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import './style-element.js';
import '@polymer/paper-button/paper-button.js';

class LoginApp extends PolymerElement {

    static get template() {
            return html `
           
      <style include="style-element">
      
      </style>
      
      

      <!--- Applocation component start -->
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <!--- Applocation component end -->

      <!--- Approute component start -->
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <!--- Applocation component end -->
     
    <div id="login">
      <section>
        <div class="login-area"  >
            <!-- Logo Here --->
            <h1><i style="color:blue;">Login-Here</i></h1>
            
            <!-- Validation Message Here -->
            <div >
              <h3 id="nvalid"></h3>
            </div>
           
            <!-- Login Form Start --->  
            <iron-form>  
                <form id="myForm" is = "iron-form"   >
                    <paper-input   id="username"  maxlength="10" label="Enter Username" required 
                    auto-validate error-message="Username must be filled out"></paper-input>

                   <paper-input   type="password" id="password"  maxlength="10" label="Enter Password" 
                    required auto-validate error-message="Password must be filled out"></paper-input>

                    <paper-button raised   id="submitForValidation" required
                    class="btn" on-click="userform">Login</paper-button>
                    <a href="">Forgot Password</a>
                </form>
            </iron-form>
            <!-- Login Form End ---> 
           
        </div>
      </section>
    </div>
    

    `;
        }
        
        /** Get values on Submit and checking the validation */
    userform() {
        var user = this.$.username.value;
        var pass = this.$.password.value;
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);

         
        if (user == "admin" && pass == "admin") {
         
             window.location.href = "/dashboard";
            /** this.set('route.path', '/dashboard'); */
            return user;
            
        }else{
            this.$.nvalid.innerHTML = " Invalid Credentials";
            this.$.nvalid.style.color="red";
            
        }
    };
}


window.customElements.define('login-app', LoginApp);