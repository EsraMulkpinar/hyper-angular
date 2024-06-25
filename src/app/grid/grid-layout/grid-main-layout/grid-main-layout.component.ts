import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { ColorService } from '../../../services/color/color.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  templateUrl: './grid-main-layout.component.html',
  styleUrl: './grid-main-layout.component.css'
})
export class GridMainLayoutComponent {
  @Output() menuItemClick = new EventEmitter<string>();
  menuItems: { text: string, color: string }[] = [];
  selectedColor: string ="";

  constructor(private colorService: ColorService,@Inject(PLATFORM_ID) private platformId: Object) {}
 
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

  onMenuItemClick(color: string): void {
    this.colorService.setColor(color);
  }
}
