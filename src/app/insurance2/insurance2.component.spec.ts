import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurance2Component } from './insurance2.component';

describe('Insurance2Component', () => {
  let component: Insurance2Component;
  let fixture: ComponentFixture<Insurance2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Insurance2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Insurance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
