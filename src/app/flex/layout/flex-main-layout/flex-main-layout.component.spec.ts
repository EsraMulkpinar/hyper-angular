import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexMainLayoutComponent } from './flex-main-layout.component';

describe('FlexMainLayoutComponent', () => {
  let component: FlexMainLayoutComponent;
  let fixture: ComponentFixture<FlexMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexMainLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
