import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ColorService } from '../../../services/color/color.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'flex-main-layout',
  templateUrl: './flex-main-layout.component.html',
  styleUrl: './flex-main-layout.component.css'
})
export class FlexMainLayoutComponent {
   selectedColor: string="";

  constructor(private colorService: ColorService, @Inject(PLATFORM_ID) private platformId: Object) {}


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
