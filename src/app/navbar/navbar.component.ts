import { Component, HostListener, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
menuType = 'default';
  constructor(private sharedService: SharedService, private route:Router) {}

  toggleLoginForm() {
    this.sharedService.toggleLoginForm();
  }
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
        console.warn('Seller area');
        this.menuType='seller';
      }else{
       this.menuType = 'default';
      }}
    })

    this.handleHeaderScroll();
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
    this.handleHeaderScroll();
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

