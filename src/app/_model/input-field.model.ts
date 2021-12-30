export interface InputField {
    id : number,
    nama_form : string,
    label : string
    type ?: string,
    dropdown_value ?: [
        id ?: number,
        name_value ?: string
    ],
    value ?: string
}
