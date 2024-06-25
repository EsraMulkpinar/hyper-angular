import { Component, ElementRef, HostListener } from '@angular/core';
import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-grid-sidebar',
  templateUrl: './grid-sidebar.component.html',
  styleUrl: './grid-sidebar.component.css'
})
export class GridSidebarComponent {
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
