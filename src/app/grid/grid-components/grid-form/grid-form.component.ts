import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorService } from '../../../services/color/color.service';

@Component({
  selector: 'app-grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.css']
})
export class GridFormComponent implements OnInit {
  flexForm!: FormGroup;
  currentColor: string = ''; 

  constructor(private fb: FormBuilder, private router: Router, private colorService: ColorService) { }
 
  ngOnInit(): void {
    this.flexForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.flexForm.valid) {
      this.router.navigate(['/flex']);
    }
  }

    onReset(): void {
    this.flexForm.reset();
    this.colorService.setColor('#28577D'); 
  }
 
}
