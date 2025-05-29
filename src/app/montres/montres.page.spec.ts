import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MontresPage } from './montres.page';

describe('MontresPage', () => {
  let component: MontresPage;
  let fixture: ComponentFixture<MontresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MontresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
