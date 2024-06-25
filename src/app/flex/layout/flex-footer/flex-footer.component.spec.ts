import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexFooterComponent } from './flex-footer.component';

describe('FlexFooterComponent', () => {
  let component: FlexFooterComponent;
  let fixture: ComponentFixture<FlexFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
