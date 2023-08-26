import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeClonePage } from './home-clone.page';

describe('HomeClonePage', () => {
  let component: HomeClonePage;
  let fixture: ComponentFixture<HomeClonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeClonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
