export class TextField<T>{
    key !: string
    value : T|undefined;
    raw_value !: string;
    type !: string;
    options !: {key : string; value : string}[];
    constructor(options: {
        value?: T;
        key?: string;
        type?: string;
        options?: {key: string, value: string}[];
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.type = options.type || '';
      this.options = options.options || [];
    }
  }
}
