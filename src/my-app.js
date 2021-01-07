import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-card/paper-card.js';
import './shared-styles.js';
import './my-icons.js';



// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);


class MainApp extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          --app-primary-color: #673AB7;
          --app-secondary-color: black;
          display: block;
        }
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

      <!--- Applocation component start -->
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <!--- Applocation component end -->

      <!--- Approute component start -->
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <!--- Applocation component end -->

      <!--- Appdrawer Layout component start -->
      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
         
          <!-- Naviigation Start -->
          <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
            
              <app-toolbar><div style="color:white">
                <i style="font-size:30px;padding:46px">Education</i>
              </div>
              </app-toolbar>
            

              <!-- Iron Selecctor Start -->
              <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation" role="Navigation" tabindex="0">
                <a name="dashboard" role="Dashboard" href="[[rootPath]]dashboard"> Dashboard</a>
                <a name="technical" role="Technical" href="[[rootPath]]technical"> Technical</a>
                <a name="non-technical" role="Non Technical" href="[[rootPath]]non-technical"> Non-Technical</a>
             
                <a name="login" href="[[rootPath]]login" role="Logout">Logout</a>
              </iron-selector>
              <!-- Iron Selecctor End -->

          </app-drawer>
          <!-- Navigation End -->

          <!-- Main content Start -->
          <app-header-layout has-scrolling-region="">
          
                <!-- App Header Start -->
                <app-header id="appheader" slot="header" condenses="" reveals="" effects="waterfall">
                  <app-toolbar>
                    <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>

                    <div main-title="" class="mobile-logo" role="Mobile Logo">
                    <h1 style="color:white">Education</h1>
                    </div>
                  </app-toolbar>
                </app-header>
                <!-- App Header End -->

                <!-- Iron Pages Start -->
                <iron-pages selected="[[page]]" attr-for-selected="name" role="main page">
                  <login-app name="login"></login-app>
                  <dashboard-app name="dashboard"></dashboard-app>
                  <my-technical name="technical"></my-technical>
                  <non-technical name="non-technical"></non-technical>
                  <my-view404 name="view404"></my-view404>
                </iron-pages>
                <!-- Iron Pages End -->

           


                
                <div id="paperCard">
                
                <!-- Header -->
                <div style="background:blue;padding:10px">
                  <h1 style="text-align:center;color:white">Education </h1>
                </div>

               
                <div class="header">
                <img src="images/1.jfif" style="width:100%;height:400px"
                </div>



                <!-- The flexible grid (content) -->
                <div class="row">
                
                <div class="main">
                    <h2>Technical </h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div>
                    <img src="images/tech.jpeg" style="width:100%;height:300px">
                    </div>
                    <p >Technical skills are the abilities and knowledge needed to perform specific tasks. The are
                    practical, and often relate to mechanical, information technology, mathematical, or scientific tasks.
                    Some examples include knowledge of programming languages, design programs, mechanical equipment, or tools
                  </p>
                    <p><a href="https://www.thebalancecareers.com/technical-skills-list-2063775#:~:text=Technical%20skills%20are%20the%20abilities,%2C%20mechanical%20equipment%2C%20or%20tools." 
                    target="_blank">
                    more...</a></p>
                    <br>
                    <h2>Non-Technical </h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div>
                    <img src="images/nont.png" style="width:100%;height:300px">
                    </div>
                    <p >Technical skills are the abilities and knowledge needed to perform specific tasks. They
                      are
                      practical, and often relate to mechanical, information technology, mathematical, or scientific tasks.
                      Some examples include knowledge of programming languages, design programs, mechanical equipment, or tools
                    </p>
                    <p><a target="_blank" href="https://www.arpansa.gov.au/regulation-and-licensing/safety-security-transport/holistic-safety/non-technical-skills#:~:text=Non%2DTechnical%20Skills%20('NTS,%3B%20and%20situation%2Dawareness%20skills.&text=However%2C%20they%20complement%20these%20technical,them%20more%20efficient%20and%20effective.">
                    more...</a></p>
                </div>
                </div>

                <!-- Footer -->
                <div class="footer">
                <p>2020 - 2021 Copyrights by <a href="#">Viswa</a>. Designed & Maintanined by <a href="#">Viswa</a></p>
                </div>

                </div>
               
                
               
                  
             


          </app-header-layout>
          <!-- Main content End -->

      </app-drawer-layout>
    `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged' // _pageChanged to import the page.
            },
            routeData: Object,
            subroute: Object
        };
    }

    static get observers() {
        return [
            '_routePageChanged(routeData.page)' //_routePageChanged to check the route data changes
        ];
    }

    _routePageChanged(page) {
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'login' in that case. And if the page doesn't exist, show 'view404'.

        if (!page) {
            this.page = 'login';
        } else if (['login', 'dashboard', 'technical', 'non-technical'].indexOf(page) !== -1) {
            this.page = page;
        } else {
            this.page = 'view404';
        }

        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }

        if (page = 'login') { } else {
            this.$.drawer.style.display = "block";
        }
    }

    _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {

            case 'login':
                import('./login-app.js');
                this.$.drawer.style.display = "none";
                this.$.appheader.style.display = "none";
                this.$.paperCard.style.display = "none";
                break;

            case 'dashboard':
                import('./my-app.js');
                break;

            case 'technical':
                import('./my-technical.js');
                this.$.paperCard.style.display = "none";
                break;

            case 'non-technical':
                import('./non-technical.js');
                this.$.paperCard.style.display = "none";

                break;

            case 'view404':
                import('./my-view404.js');
                break;
        }
    }

}

window.customElements.define('main-app', MainApp);