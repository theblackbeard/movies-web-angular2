/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditSerieComponent } from './edit-serie.component';

describe('EditSerieComponent', () => {
  let component: EditSerieComponent;
  let fixture: ComponentFixture<EditSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
