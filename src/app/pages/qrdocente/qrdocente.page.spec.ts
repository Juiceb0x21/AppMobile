import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrdocentePage } from './qrdocente.page';

describe('QrdocentePage', () => {
  let component: QrdocentePage;
  let fixture: ComponentFixture<QrdocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrdocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
