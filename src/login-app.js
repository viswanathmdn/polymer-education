import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import './style-element.js';

class LoginApp extends PolymerElement {

    static get template() {
            return html `
      <style include="style-element">
      
      </style>
      <script src='https://kit.fontawesome.com/a076d05399.js'></script>

      <!--- Applocation component start -->
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <!--- Applocation component end -->

      <!--- Approute component start -->
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <!--- Applocation component end -->
     
    <div id="login">
      <section>
        <div class="login-area" style="margin-left:10%" >
            <!-- Logo Here --->
            <h1><i style="color:blue;">Login-Here</i></h1>
            <!-- Login Form Start --->  
            <iron-form>  
                <form id="myForm" is = "iron-form" method="post" action="/form/handler" tabindex="0">
                    <paper-input role="Enter Username" id="username" label="Enter Username" required 
                    auto-validate error-message="Username must be filled out"></paper-input>

                    <paper-input role="Enter Password" type="password" id="password" label="Enter Password" 
                    required auto-validate error-message="Password must be filled out"></paper-input>

                    <input id="submitForValidation" role="Submit" type="submit" required 
                    Label="Enter the Valid Username or Password" value="Login" on-click="userform" class="btn">
                    <a href="#">Forgot Username/Password</a>
                </form>
            </iron-form>
            <!-- Login Form End --->       
        </div>
      </section>
    </div>
    

    `;
        }
        // Get values on Submit and checking the validation
    userform() {
        var user = this.$.username.value;
        var pass = this.$.password.value;
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);

        if (user == "admin" && pass == "admin") {
             window.location.href = "/dashboard";
            //this.set('route.path', '/dashboard');
            return user;
            
        }
    };
}


window.customElements.define('login-app', LoginApp);