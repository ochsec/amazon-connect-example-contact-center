export interface Identifier {
    field: string;
    value: string | number;
}

export interface Event {
    identifier1: Identifier;
    identifier2: Identifier;
}

export const isValidIdentifier = (obj: any): obj is Identifier => {
    return typeof obj === 'object' && typeof obj?.field === 'string' && 
    (typeof obj.value === 'string' || typeof obj.value === 'number');
}

export const isValidEvent = (obj: any): obj is Event => {
    return typeof obj === 'object' && isValidIdentifier(obj?.identifier1) &&
    isValidIdentifier(obj?.identifier2);
}

export type Customer = {
    Id: number;
    Profile: {
        FirstName: string;
        LastName: string;
        MiddleName: string;
        Email: string;
    };
    Address: {
        Address1: string;
        Address2: string;
        City: string;
        State: string;
        ZipCode: string;
    };
    Phone: {
        Home: string;
        Mobile: string;
    };
    DOB: string;
    PIN: number;
};

export interface Response {
    status: number;
    customer: null | Customer;
}