import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperacionPage } from './recuperacion.page';

describe('RecuperacionPage', () => {
  let component: RecuperacionPage;
  let fixture: ComponentFixture<RecuperacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
