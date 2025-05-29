import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuportsPage } from './suports.page';

describe('SuportsPage', () => {
  let component: SuportsPage;
  let fixture: ComponentFixture<SuportsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
