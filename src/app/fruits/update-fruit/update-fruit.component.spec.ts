import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFruitComponent } from './update-fruit.component';

describe('UpdateFruitComponent', () => {
  let component: UpdateFruitComponent;
  let fixture: ComponentFixture<UpdateFruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFruitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
