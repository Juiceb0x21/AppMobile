import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPage } from './listar.page';

describe('ListarPage', () => {
  let component: ListarPage;
  let fixture: ComponentFixture<ListarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
