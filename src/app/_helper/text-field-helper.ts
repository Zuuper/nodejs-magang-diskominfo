import { FormControl, FormGroup, Validators } from '@angular/forms';

export class TextFieldHelper {
    constructor(){}
    setNewFormField(form_field: any, auth_form : boolean = false, view_only : boolean = false){
        let new_form: any = {}
        for (let x in form_field) {
          if (auth_form || view_only) {
            if (form_field[x]['nama_form'] == "email" || form_field[x]['nama_form'] == 'password' || form_field[x]['nama_form'] == "re-password") {
              new_form[form_field[x]['nama_form']] = (view_only === true) ? new FormControl(form_field[x]['value']) : new FormControl('', Validators.required)
            }
            new_form[form_field[x]['nama_form']] = (view_only === true) ? new FormControl(form_field[x]['value']) :  new FormControl('')
          }else {
            if (form_field[x]['nama_form'] == "email" || form_field[x]['nama_form'] == 'password' || form_field[x]['nama_form'] == "re-password") {
              new_form[form_field[x]['id']] = new FormControl('', Validators.required)
            }
            new_form[form_field[x]['id']] = new FormControl('')
          }
        
        }
        console.log(new FormGroup(new_form))
        return new FormGroup(new_form)
    }
    setNormalFormField(form : any[], form_builder : any = [], is_view_mode : boolean = false){

    }
    setAuthFormField(form : any[], form_builder : any[] = [], is_view_mode : boolean = false){}
}
