import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleapiPage } from './detalleapi.page';

describe('DetalleapiPage', () => {
  let component: DetalleapiPage;
  let fixture: ComponentFixture<DetalleapiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
