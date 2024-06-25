import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ColorService } from '../../../services/color/color.service';
import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrl: './grid-header.component.css'
})
export class GridHeaderComponent {
  constructor(private sidebarService: SidebarService,private colorService: ColorService,@Inject(PLATFORM_ID) private platformId: Object) {}

  toggleSidebar(event: Event) {
    event.stopPropagation(); 
    this.sidebarService.toggleSidebar();
  }
  selectedColor: string ="";


  ngOnInit(): void {
    this.colorService.color$.subscribe(color => {
      this.selectedColor = color;
      this.applyColor(color);
    });
  }

  applyColor(color: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.style.setProperty('--selected-color', color);
    }
  }
}
