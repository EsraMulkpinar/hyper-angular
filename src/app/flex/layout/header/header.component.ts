import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-flex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar(event: Event) {
    event.stopPropagation(); 
    this.sidebarService.toggleSidebar();
  }
}
