import { TextFieldValue } from "./text-field-value.model";
export class TextField {
    id !: number;
    field_name !: string;
    type !: string;
    value !: TextFieldValue;
}
