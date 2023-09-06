import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarclasPage } from './iniciarclas.page';

describe('IniciarclasPage', () => {
  let component: IniciarclasPage;
  let fixture: ComponentFixture<IniciarclasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciarclasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
