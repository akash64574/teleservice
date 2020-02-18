import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEventAdderComponent } from './dynamic-event-adder.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('DynamicEventAdderComponent', () => {
  let component: DynamicEventAdderComponent;
  let fixture: ComponentFixture<DynamicEventAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicEventAdderComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicEventAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add slots', () => {
    component.addSlots({value: {startTime: '12', endTime: '12'}});
    expect(component).toBeTruthy();
  });

  it('should delete slots', () => {
    component.deleteSlots(1);
  });
});
