import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogindocentePage } from './logindocente.page';

describe('LogindocentePage', () => {
  let component: LogindocentePage;
  let fixture: ComponentFixture<LogindocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogindocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
