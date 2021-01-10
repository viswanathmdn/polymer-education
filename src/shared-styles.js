import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    h1{
      font-size: 22px !important;
    }

    app-drawer-layout:not([narrow]) [drawer-toggle] {
      display: none;
    }

    app-header {

      color: #fff;
      background-color: var(--app-primary-color);
    }
    @media only screen and (min-width: 640px) {
        app-header{
            display: none;
        }
    }

    app-header paper-icon-button {
      --paper-icon-button-ink-color: white;
    }
    .drawer-list {
      margin: 0 20px;
    }

    .drawer-list a {
      display: block;
      text-decoration: none;
      color: var(--app-secondary-color);
      line-height: 40px;
      
    }

    .drawer-list a.iron-selected {
      color: #fff;
      font-weight: bold;
    }
    app-drawer {
        --app-drawer-scrim-background: rgba(0, 0, 100, 0.8);

        --app-drawer-content-container: {
          background-color: #673AB7;
        }
        
      }
      .logo img{
        margin-top:20px;
    }
    .mobile-logo img{
      margin-top:7px;
  }
    
    .drawer-list a.iron-selected {
      background: #8d5ce4;
  }
  .drawer-list a {
    color: #fff;
    padding: 11px 27px;
    border-bottom: 1px solid #5c30ab;
    font-size: 18px;
    font-weight: normal !important;
  }
    .drawer-list a:hover {
      background: #8d5ce4;
  }
  footer.card {
    margin: 0px 34px 0px;
    padding: 1px 28px;
    color: #757575;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  footer p a{
    text-decoration: none;

  }
    .clr1, .clr2, .clr3, .clr4{
      border-radius: 5px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      padding: 15px;
      margin-bottom: 10px;
  }
  .clr1 p, .clr2 p, .clr3 p, .clr4 p{
    margin: 7px 0px 0px !important;
}
  .clr1 span, .clr2 span, .clr3 span, .clr4 span {
      font-size: 25px;
  }
  .clr1{
      background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important
  }
  .clr2{
      background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%) !important;
  }
  .clr3{
      background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%) !important;
  }
  .clr4{
      background-image: linear-gradient(to right, #434343 0%, black 100%) !important;
  }
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

    
    
      
     
    input{
      padding: 11px 5px;
      border-radius: 5px;
      width: 95%;
      border: 1px solid #ccc;
      outline: none;
    }
    .btn {
      width: 200px;
    }
    .btn:hover {
      background: #673ab7;
      color: #fff;
      display: block;
      text-align: center;
    }

    /* flex */
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

      #edu{
        color:white;
        font-size:30px;
        padding:46px;
      }
      .edud{
        background-color:blue;
       color:white;
        text-align:center;
        padding:3px;
      }

     
      
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);