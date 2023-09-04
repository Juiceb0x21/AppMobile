import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomedocentePage } from './homedocente.page';

describe('HomedocentePage', () => {
  let component: HomedocentePage;
  let fixture: ComponentFixture<HomedocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomedocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
