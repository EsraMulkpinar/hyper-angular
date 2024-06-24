import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ColorService } from '../../services/color/color.service';

@Component({
  selector: 'app-flex-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
