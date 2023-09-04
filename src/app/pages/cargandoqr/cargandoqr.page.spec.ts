import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargandoqrPage } from './cargandoqr.page';

describe('CargandoqrPage', () => {
  let component: CargandoqrPage;
  let fixture: ComponentFixture<CargandoqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CargandoqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
