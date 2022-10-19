import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRoutineComponent } from './active-routine.component';

describe('ActiveRoutineComponent', () => {
  let component: ActiveRoutineComponent;
  let fixture: ComponentFixture<ActiveRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveRoutineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
