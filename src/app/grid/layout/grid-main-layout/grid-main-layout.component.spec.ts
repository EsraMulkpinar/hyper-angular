import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMainLayoutComponent } from './grid-main-layout.component';

describe('GridMainLayoutComponent', () => {
  let component: GridMainLayoutComponent;
  let fixture: ComponentFixture<GridMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridMainLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
