import { Component, Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-flex-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  isOpen = true;
  constructor(private sidebarService: SidebarService,private eRef: ElementRef) {
  }

  ngOnInit(): void {
    this.sidebarService.sidebarOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }
  closeSidebar() {
    this.sidebarService.closeSidebar();
  }
 
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (this.isOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.sidebarService.closeSidebar();
    }
  }

}
