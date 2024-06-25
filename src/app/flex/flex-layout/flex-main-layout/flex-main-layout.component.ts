import { Component } from '@angular/core';
import { ColorService } from '../../../services/color/color.service';

@Component({
  selector: 'flex-main-layout',
  templateUrl: './flex-main-layout.component.html',
  styleUrl: './flex-main-layout.component.css'
})
export class FlexMainLayoutComponent {
  constructor(private colorService: ColorService) {}
  
  ngOnInit(): void {
    this.colorService.color$.subscribe(color => {
    });
  }

  applyColor(color: string): void {
    document.documentElement.style.setProperty('--selected-color', color);
  }

  onMenuItemClick(color: string): void {
    this.colorService.setColor(color);
  }
}
