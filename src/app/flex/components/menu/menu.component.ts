import { Component, EventEmitter, Output } from '@angular/core';
import { ColorService } from '../../services/color/color.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
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
