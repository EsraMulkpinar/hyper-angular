import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexSidebarComponent } from './flex-sidebar.component';

describe('FlexSidebarComponent', () => {
  let component: FlexSidebarComponent;
  let fixture: ComponentFixture<FlexSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
