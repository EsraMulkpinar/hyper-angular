import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ColorService } from '../../../services/color/color.service';

@Component({
  selector: 'app-grid-footer',
  templateUrl: './grid-footer.component.html',
  styleUrl: './grid-footer.component.css'
})
export class GridFooterComponent {
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
}
