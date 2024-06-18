import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterstartComponent } from './footerstart.component';

describe('FooterstartComponent', () => {
  let component: FooterstartComponent;
  let fixture: ComponentFixture<FooterstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterstartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
