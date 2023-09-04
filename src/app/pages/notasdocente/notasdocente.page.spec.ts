import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotasdocentePage } from './notasdocente.page';

describe('NotasdocentePage', () => {
  let component: NotasdocentePage;
  let fixture: ComponentFixture<NotasdocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotasdocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
