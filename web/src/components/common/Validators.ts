/* 
    Validator is a 'strategy' interface used to validate inputs,
    returning TRUE if is valid, of FALSE if not
*/
export interface Validator {
    validate: (value: string) => boolean;
}

/* --- strategies implementations --- */
export const MinLenght = (value: number): Validator => {
    return { 
        validate: (s) => { return s.length >= value; }
    };
}

export const MaxLenght = (value: number): Validator => {
    return { 
        validate: (s) => { return s.length <= value; }
    };
}