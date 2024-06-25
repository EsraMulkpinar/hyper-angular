import { Component } from '@angular/core';
import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrl: './grid-header.component.css'
})
export class GridHeaderComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar(event: Event) {
    event.stopPropagation(); 
    this.sidebarService.toggleSidebar();
  }

}
