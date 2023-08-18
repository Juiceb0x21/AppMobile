import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialRegistrosPage } from './historial-registros.page';

describe('HistorialRegistrosPage', () => {
  let component: HistorialRegistrosPage;
  let fixture: ComponentFixture<HistorialRegistrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistorialRegistrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
