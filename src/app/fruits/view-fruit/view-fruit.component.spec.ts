import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFruitComponent } from './view-fruit.component';

describe('ViewFruitComponent', () => {
  let component: ViewFruitComponent;
  let fixture: ComponentFixture<ViewFruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFruitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
