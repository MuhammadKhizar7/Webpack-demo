import '../css/site.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery';
import 'bootstrap';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import  Module1  from "./Header";

// window.$ = $;
// window.jQuery = jQuery;
  // IIFE - Immediately Invoked Function Expression
  (function($, window, document) {

    // The $ is now locally scoped 

   // Listen for the jQuery ready event on the document
   $(function() {

     // The DOM is ready!
     Module1.init();
     Module1.other();

   });

   // The rest of the code goes here!

  }(window.jQuery, window, document));
  // The global jQuery object is passed as a parameter
	//usage
// $("document").ready(function () {
//   Module1.init();
// });