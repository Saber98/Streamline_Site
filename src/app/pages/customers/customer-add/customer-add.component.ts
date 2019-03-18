import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'ngx-customer-add',
    templateUrl: './customer-add.component.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `],
})
export class CustomerAddComponent implements OnInit {
    customerInfoForm: FormGroup;
    secondForm: FormGroup;
    thirdForm: FormGroup;

    @ViewChild('address') addressAccordion;
    @ViewChild('phone') phoneAccordion;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.customerInfoForm = this.fb.group({
            customerName: ['', Validators.required],
            accountNumber: ['', Validators.required],
        });

        this.secondForm = this.fb.group({
            secondCtrl: ['', Validators.required],
        });

        this.thirdForm = this.fb.group({
            thirdCtrl: ['', Validators.required],
        });

        this.addressAccordion.toggle();
        this.phoneAccordion.toggle();
    }

    onFirstSubmit() {
        this.customerInfoForm.markAsDirty();
    }

    onSecondSubmit() {
        this.secondForm.markAsDirty();
    }

    onThirdSubmit() {
        this.thirdForm.markAsDirty();
    }
}
