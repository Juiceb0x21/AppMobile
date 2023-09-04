import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeccionesdocentePage } from './seccionesdocente.page';

describe('SeccionesdocentePage', () => {
  let component: SeccionesdocentePage;
  let fixture: ComponentFixture<SeccionesdocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeccionesdocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
