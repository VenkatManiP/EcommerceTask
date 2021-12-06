import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallFruitsComponent } from './viewall-fruits.component';

describe('ViewallFruitsComponent', () => {
  let component: ViewallFruitsComponent;
  let fixture: ComponentFixture<ViewallFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
