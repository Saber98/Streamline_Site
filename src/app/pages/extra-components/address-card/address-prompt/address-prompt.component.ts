import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, AddressType } from '../../../../@core/data/custom/address';
import { State } from '../../../../@core/data/custom/state';

@Component({
  selector: 'ngx-address-prompt',
  templateUrl: 'address-prompt.component.html',
  styleUrls: ['address-prompt.component.scss'],
})
export class AddressPromptComponent implements OnInit {
  data: Address;
  address: Address;
  addressEntryForm: FormGroup;
  constructor(private fb: FormBuilder,
    protected ref: NbDialogRef<AddressPromptComponent>) {
    if (!this.address) {
      this.address = new Address();
    }
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.addressEntryForm.invalid) {

    } else {
      const addressType = new AddressType();
      addressType.id = 1;
      addressType.addressType = this.addressEntryForm.get('addressType').value;
      addressType.archived = false;
      const state = new State();
      state.id = 1;
      state.stateName = 'South Carolina';
      state.stateAbbreviation = this.addressEntryForm.get('state').value;
      state.archived = false;
      this.addressEntryForm.markAsDirty();
      this.address.address1 = this.addressEntryForm.get('address1').value;
      this.address.address2 = this.addressEntryForm.get('address2').value;
      this.address.city = this.addressEntryForm.get('city').value;
      this.address.stateId = 1;
      this.address.state = state;
      this.address.zip = this.addressEntryForm.get('zip').value;
      this.address.addressTypeId = 1;
      this.address.addressType = addressType;

      this.ref.close(this.address);
    }

  }

  ngOnInit() {
    this.addressEntryForm = this.fb.group({
      addressType: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });
    if (this.data) {
      this.address = this.data;
      this.addressEntryForm.get('addressType').setValue(this.address.addressType.addressType);
      this.addressEntryForm.get('address1').setValue(this.address.address1);
      this.addressEntryForm.get('address2').setValue(this.address.address2);
      this.addressEntryForm.get('city').setValue(this.address.city);
      this.addressEntryForm.get('state').setValue(this.address.state.stateAbbreviation);
      this.addressEntryForm.get('zip').setValue(this.address.zip);
    }
  }
}
