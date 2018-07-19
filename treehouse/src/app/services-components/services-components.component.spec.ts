import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponentsComponent } from './services-components.component';

describe('ServicesComponentsComponent', () => {
  let component: ServicesComponentsComponent;
  let fixture: ComponentFixture<ServicesComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
