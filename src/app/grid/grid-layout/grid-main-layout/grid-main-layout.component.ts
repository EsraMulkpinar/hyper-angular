import { Component, EventEmitter, Output } from '@angular/core';
import { ColorService } from '../../../services/color/color.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './grid-main-layout.component.html',
  styleUrl: './grid-main-layout.component.css'
})
export class GridMainLayoutComponent {
  @Output() menuItemClick = new EventEmitter<string>();
  menuItems: { text: string, color: string }[] = [];

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
