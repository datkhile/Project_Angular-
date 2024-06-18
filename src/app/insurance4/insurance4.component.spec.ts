import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurance4Component } from './insurance4.component';

describe('Insurance4Component', () => {
  let component: Insurance4Component;
  let fixture: ComponentFixture<Insurance4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Insurance4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Insurance4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
