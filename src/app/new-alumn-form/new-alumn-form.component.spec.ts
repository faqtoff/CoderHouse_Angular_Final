import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAlumnFormComponent } from './new-alumn-form.component';

describe('NewAlumnFormComponent', () => {
  let component: NewAlumnFormComponent;
  let fixture: ComponentFixture<NewAlumnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAlumnFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAlumnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
