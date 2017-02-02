/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MdnComponent } from './mdn.component';

describe('MdnComponent', () => {
  let component: MdnComponent;
  let fixture: ComponentFixture<MdnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
