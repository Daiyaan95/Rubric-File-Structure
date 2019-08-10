import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPropPage } from './new-prop.page';

describe('NewPropPage', () => {
  let component: NewPropPage;
  let fixture: ComponentFixture<NewPropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
