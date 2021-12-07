import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfruitbycategoryComponent } from './viewfruitbycategory.component';

describe('ViewfruitbycategoryComponent', () => {
  let component: ViewfruitbycategoryComponent;
  let fixture: ComponentFixture<ViewfruitbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfruitbycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfruitbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
