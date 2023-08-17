import { Component, HostListener, OnInit } from '@angular/core';

import { SharedService } from '../shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private sharedService: SharedService) {}

  toggleLoginForm() {
    this.sharedService.toggleLoginForm();
  }
  ngOnInit(): void {
    // This code will be executed when the component is initialized
    this.handleHeaderScroll(); // Call the function to handle the header scroll immediately
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const searchButton = document.querySelector('#search-btn');
    const searchForm = document.querySelector('.search-form');

    if (event.target === searchButton) {
      searchForm?.classList.toggle('active');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.handleHeaderScroll(); // Call the function to handle the header scroll
  }

  private handleHeaderScroll() {
    const headerElement = document.querySelector('.header .header-1');
    if (headerElement) {
      if (window.scrollY > 80) {
        headerElement.classList.add('active');
      } else {
        headerElement.classList.remove('active');
      }
    }
  }
}

