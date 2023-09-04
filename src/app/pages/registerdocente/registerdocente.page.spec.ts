import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterdocentePage } from './registerdocente.page';

describe('RegisterdocentePage', () => {
  let component: RegisterdocentePage;
  let fixture: ComponentFixture<RegisterdocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterdocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
