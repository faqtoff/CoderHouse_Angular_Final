import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumListComponent } from './alum-list.component';

describe('AlumListComponent', () => {
  let component: AlumListComponent;
  let fixture: ComponentFixture<AlumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
