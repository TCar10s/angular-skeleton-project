import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateFieldsErrorsComponent } from './template-fields-error.component';

xdescribe('TemplateFieldsErrorsComponent', () => {
  let component: TemplateFieldsErrorsComponent;
  let fixture: ComponentFixture<TemplateFieldsErrorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateFieldsErrorsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFieldsErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
