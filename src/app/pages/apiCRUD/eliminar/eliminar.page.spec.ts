import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarPage } from './eliminar.page';

describe('EliminarPage', () => {
  let component: EliminarPage;
  let fixture: ComponentFixture<EliminarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EliminarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
