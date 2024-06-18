import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurance1Component } from './insurance1.component';

describe('Insurance1Component', () => {
  let component: Insurance1Component;
  let fixture: ComponentFixture<Insurance1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Insurance1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Insurance1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
