import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { AddressPromptComponent } from '../../extra-components/address-card/address-prompt/address-prompt.component';
import { Address, AddressType } from '../../../@core/data/custom/address';
import { State } from '../../../@core/data/custom/state';

interface CardSettings {
    title: string;
    iconClass: string;
    type: string;
    link: string;
  }

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
    addressCard: CardSettings = {
        title: '',
        iconClass: 'nb-trash',
        type: 'danger',
        link: '#/pages/customers/customer-search',
      };

    customerInfoForm: FormGroup;
    secondForm: FormGroup;
    thirdForm: FormGroup;

    addresses: Address[];

    @ViewChild('address') addressAccordion;
    @ViewChild('phone') phoneAccordion;

    constructor(private fb: FormBuilder,
                private dialogService: NbDialogService) {
        this.addresses = new Array<Address>();
    }

    addAddress() {
        this.dialogService.open(AddressPromptComponent)
            .onClose.subscribe(address => address && this.addresses.push(address));
    }

    editAddress(address) {
        this.dialogService.open(AddressPromptComponent, { context: {
            data: address }})
            .onClose.subscribe(adr => address = adr);
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

    trackByFn(index, item) {
        return item.id;
    }

    removeAddress(e) {
        const removeIndex = this.addresses.findIndex(x => x.id === e.id);

        this.addresses.splice(removeIndex, 1);
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
