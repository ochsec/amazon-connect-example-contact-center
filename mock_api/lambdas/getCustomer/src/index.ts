import { Event, isValidEvent, Customer, Response } from './types';

import * as data from './customers.json';

export const handler = (event: Event, context: any) => {
    let responseObject: Response = {
        status: 200,
        customer: null,
    };

    if (!isValidEvent) {
        return responseObject;
    }

    const customers = data as Customer[];
    const filterResult = customers.filter(c => (
        event.identifier1.value === c.Id &&
        (event.identifier2.field === 'DOB' ?
        event.identifier2.value === c.DOB :
        event.identifier2.value === c.PIN))
    );
    if (filterResult.length === 0) {
        return responseObject;
    }

    responseObject.customer = filterResult[0];
    return responseObject;
};
