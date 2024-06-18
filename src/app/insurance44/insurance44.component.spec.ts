import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurance44Component } from './insurance44.component';

describe('Insurance44Component', () => {
  let component: Insurance44Component;
  let fixture: ComponentFixture<Insurance44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Insurance44Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Insurance44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
