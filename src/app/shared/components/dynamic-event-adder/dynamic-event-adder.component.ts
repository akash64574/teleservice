import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-event-adder',
  templateUrl: './dynamic-event-adder.component.html',
  styleUrls: ['./dynamic-event-adder.component.sass']
})
export class DynamicEventAdderComponent implements OnInit {

  @Input() baseDay = '2020-10-02';
  @Input() baseToTime: string = '15:02:10';
  @Input() baseFromTime: string = '15:05:10';
  @Input() selectedAdminSlots: any;
  @Input() role;
  @Output() addSloatEvent = new EventEmitter();

  public invalidSlotAlert: boolean;
  public convertedDay;
  public slotForm = new FormGroup({
    slotDate: new FormControl(),
    startTime: new FormControl(),
    endTime: new FormControl(),
    adAgencyName: new FormControl()
  });

  public slotList: Array<any>;
  constructor(private formBuilder: FormBuilder) {
    this.slotList = [];
    this.invalidSlotAlert = false;
    this.convertedDay = Date.parse(this.baseDay);
   }

      // gets donor form controls
      get slotControl() { return this.slotForm.controls; }

      // create a reactive login form
      public createForm(): void {
        this.slotForm = this.formBuilder.group({
          slotDate: ['', [
            Validators.required]],
          startTime: ['', [
            Validators.required]],
          endTime: ['', [
              Validators.required]]
        });
      }

      // Pushes tha slots to an temporary array
      public addSlots(slotDetails): void {
        slotDetails.value.startTime = (slotDetails.value.startTime.length < 5) ? slotDetails.value.startTime.length
         + ':00' : slotDetails.value.startTime;
        slotDetails.value.endTime = (slotDetails.value.endTime.length < 5) ? slotDetails.value.endTime.length
         + ':00' : slotDetails.value.endTime;
        this.slotList.push(slotDetails.value);
        this.addSloatEvent.emit(this.slotList);
      }

      // Delete the slots stored in temporary array based on index
      public deleteSlots(index): void {
        this.slotList.splice(index, 1);
      }

  ngOnInit() {
    // Calls the reactive form module
    this.createForm();
  }

}

