import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexMenuComponent } from './flex-menu.component';

describe('FlexMenuComponent', () => {
  let component: FlexMenuComponent;
  let fixture: ComponentFixture<FlexMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
