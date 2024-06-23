import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flex-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  flexForm!: any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.flexForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.flexForm.valid) {
      // Form submit işlemleri burada yapılabilir
      this.router.navigate(['/grid']); // Geçiş yapılacak rota
    }
  }

  onReset(): void {
    this.flexForm.reset();
    // Renkleri sıfırlama işlemleri burada yapılabilir
    document.body.style.backgroundColor = '';
  }
}
