import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorService } from '../../services/color/color.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-flex-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  flexForm!: FormGroup;
  currentColor: string = ''; // Mevcut rengi saklamak için

  constructor(private fb: FormBuilder, private router: Router, private colorService: ColorService, @Inject(PLATFORM_ID) private platformId: Object) { }
 
  ngOnInit(): void {
    this.flexForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.colorService.color$.subscribe(color => {
      this.currentColor = color;
      this.applyColor(color);
    });
  }

  onSubmit(): void {
    if (this.flexForm.valid) {
      this.router.navigate(['/grid']);
    }
  }

    onReset(): void {
    this.flexForm.reset();
    this.colorService.setColor('#28577D'); 
  }

  applyColor(color: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const buttons = document.querySelectorAll('.form-buttons button');
      buttons.forEach(button => {
        (button as HTMLElement).style.backgroundColor = color;
      });
    }
  }
}
