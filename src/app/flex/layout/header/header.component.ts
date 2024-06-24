import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { ColorService } from '../../services/color/color.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'flex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
