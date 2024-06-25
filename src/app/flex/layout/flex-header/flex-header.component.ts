import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-flex-header',
  templateUrl: './flex-header.component.html',
  styleUrls: ['./flex-header.component.css']
})
export class FlexHeaderComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar(event: Event) {
    event.stopPropagation(); 
    this.sidebarService.toggleSidebar();
  }

 
}
