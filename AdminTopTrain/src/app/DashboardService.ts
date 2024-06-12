// dashboard.service.ts

import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  initDashboardFeatures(): void {
    this.initOffcanvas();
    this.initializeSubmenuCollapse();
    this.initMinimizeToggle();
    this.initNavLinks();
  }

  private initOffcanvas(): void {
    $(function() {
      $('[data-toggle="offcanvas"]').on("click", function() {
        $('.sidebar-offcanvas').toggleClass('active');
      });
    });
  }

  private initializeSubmenuCollapse(): void {
    const collapseTogglers = document.querySelectorAll('.nav-link[data-toggle="collapse"]');
    collapseTogglers.forEach((toggler) => {
      toggler.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = (this as HTMLElement).getAttribute('href');
        if (targetId) {
          const targetCollapse = document.querySelector(targetId);
          if (targetCollapse) {
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

  private initMinimizeToggle(): void {
    $('[data-toggle="minimize"]').on("click", function() {
      const body = $('body');
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });
  }

  private initNavLinks(): void {
    $(document).ready(function(){
      $('.nav-link').click(function(){
        $('.nav-link').removeClass('checked');
        $(this).addClass('checked');
      });
    });
  }
}
