import { Component } from '@angular/core';
import { ColorService } from '../../services/color/color.service';

@Component({
  selector: 'flex-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  constructor(private colorService: ColorService) {}
  
  ngOnInit(): void {
    this.colorService.color$.subscribe(color => {
      this.applyColor(color);
    });
  }

  applyColor(color: string): void {
    document.documentElement.style.setProperty('--selected-color', color);
  }

  onMenuItemClick(color: string): void {
    this.colorService.setColor(color);
  }
}
