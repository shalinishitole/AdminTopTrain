import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare let body: JQuery<HTMLElement>;
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initOffcanvas();
    this.initializeSubmenuCollapse();


//
$('[data-toggle="minimize"]').on("click", function(this: HTMLElement) {
  if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
    body.toggleClass('sidebar-hidden');
  } else {
    body.toggleClass('sidebar-icon-only');
  }
});

$(document).ready(function(){
  $('.nav-link').click(function(){
      // Remove the 'checked' class from all nav-links
      $('.nav-link').removeClass('checked');
      // Add the 'checked' class to the clicked nav-link
      $(this).addClass('checked');
  });
});



  }

 // Function to initialize submenu collapse
 initializeSubmenuCollapse() {
  // Get all nav items with data-toggle="collapse"
  const collapseTogglers = document.querySelectorAll('.nav-link[data-toggle="collapse"]');
  
  // Loop through each nav item
  collapseTogglers.forEach((toggler) => {
    // Add click event listener to toggle collapse on click
    toggler.addEventListener('click', function(this: HTMLElement, event) {
      // Prevent default link behavior
      event.preventDefault();
      // Get the target collapse element ID
      const targetId = (this as HTMLElement).getAttribute('href');
      // Ensure targetId is not null
      if (targetId) {
        // Get the target collapse element
        const targetCollapse = document.querySelector(targetId);
        if (targetCollapse) {
          // Toggle the collapse state
          const bootstrapCollapse = new bootstrap.Collapse(targetCollapse);
          bootstrapCollapse.toggle();
          const menuArrow = this.querySelector('.menu-arrow');
          if (menuArrow) {
            menuArrow.classList.toggle('menu-arrow-down');
          }
        }
      }
    });
  });
}


  private initOffcanvas(): void {
    $(function() {
      $('[data-toggle="offcanvas"]').on("click", function() {
        $('.sidebar-offcanvas').toggleClass('active');
      });
    });
  }

}
