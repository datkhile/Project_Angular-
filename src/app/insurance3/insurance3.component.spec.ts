import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurance3Component } from './insurance3.component';

describe('Insurance3Component', () => {
  let component: Insurance3Component;
  let fixture: ComponentFixture<Insurance3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Insurance3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Insurance3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
