import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgrearPage } from './agrear.page';

describe('AgrearPage', () => {
  let component: AgrearPage;
  let fixture: ComponentFixture<AgrearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
