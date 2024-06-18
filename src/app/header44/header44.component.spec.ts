import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header44Component } from './header44.component';

describe('Header44Component', () => {
  let component: Header44Component;
  let fixture: ComponentFixture<Header44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Header44Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Header44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
