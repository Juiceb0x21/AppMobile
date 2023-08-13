import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargandoPage } from './cargando.page';

describe('CargandoPage', () => {
  let component: CargandoPage;
  let fixture: ComponentFixture<CargandoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CargandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
