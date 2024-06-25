import { Component, EventEmitter, Output } from '@angular/core';
import { ColorService } from '../../../services/color/color.service';

@Component({
  selector: 'app-grid-menu',
  templateUrl: './grid-menu.component.html',
  styleUrl: './grid-menu.component.css'
})
export class GridMenuComponent {
  @Output() menuItemClick = new EventEmitter<string>();
  menuItems: { text: string, color: string }[] = [];

  constructor(private colorService: ColorService) {}
  
  ngOnInit(): void {
    this.menuItems = [
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() },
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() },
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() },
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() },
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() },
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() },
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() },
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() },
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() },
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() },
      { text: 'MENU ITEM', color: this.colorService.generateRandomColor() }
    ];
    
  }
  

  onMenuItemClick(color: string) {
    this.menuItemClick.emit(color);
  }
  
}
