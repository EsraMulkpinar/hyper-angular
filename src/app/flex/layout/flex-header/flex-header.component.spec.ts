import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexHeaderComponent } from './flex-header.component';

describe('FlexHeaderComponent', () => {
  let component: FlexHeaderComponent;
  let fixture: ComponentFixture<FlexHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
