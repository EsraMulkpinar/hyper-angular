import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BrowserStorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private colorSubject = new BehaviorSubject<string>(this.getStoredColor() || this.generateRandomColor());
  color$ = this.colorSubject.asObservable();

  constructor(private storageService: BrowserStorageService) {
    const initialColor = this.colorSubject.value;
    this.applyColor(initialColor);
  }

  private getStoredColor(): string | null {
    return this.storageService.get('selectedColor');
  }

  setColor(color: string): void {
    if (color && color !== this.colorSubject.value) {
      this.storageService.set('selectedColor', color);
      this.colorSubject.next(color);
      this.applyColor(color);
    }
  }

  private applyColor(color: string): void {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--selected-color', color);
    }
  }

  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setRandomColor(): void {
    const randomColor = this.generateRandomColor();
    this.setColor(randomColor);
  }

  resetColor(): void {
    this.setColor('#3F6DA0');
  }
}
