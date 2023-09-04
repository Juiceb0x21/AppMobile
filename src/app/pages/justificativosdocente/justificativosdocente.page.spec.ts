import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JustificativosdocentePage } from './justificativosdocente.page';

describe('JustificativosdocentePage', () => {
  let component: JustificativosdocentePage;
  let fixture: ComponentFixture<JustificativosdocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JustificativosdocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
