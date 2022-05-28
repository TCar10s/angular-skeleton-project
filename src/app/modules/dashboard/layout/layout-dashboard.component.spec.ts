import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDashboardComponent } from './layout-dashboard.component';

describe('LayoutDashboardComponent', () => {
  let component: LayoutDashboardComponent;
  let fixture: ComponentFixture<LayoutDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
