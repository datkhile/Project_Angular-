import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurance5Component } from './insurance5.component';

describe('Insurance5Component', () => {
  let component: Insurance5Component;
  let fixture: ComponentFixture<Insurance5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Insurance5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Insurance5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
