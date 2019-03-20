import { Observable } from 'rxjs';
import { State } from './state';

export class AddressType {
    id: number;
    addressType: string;
    archived: boolean;
}

export class Address {
    id: number;
    addressTypeId: number;
    addressType: AddressType;
    address1: string;
    address2: string;
    city: string;
    stateId: number;
    state: State;
    zip: string;
    archive: boolean;
}
