export interface IContacts {
  oid: string;
  retURL: string;
  lead_source: string;
  debug?: number;
  debugEmail?: string;
  '00N5h00000HZmHD'?: string;
  '00N5h00000HZm7L'?: string;
  '00N5h00000HZm7p'?: string;
  '00N5h00000Hb6Vg'?: string;
  last_name: string;
  company: string;
  phone: string;
  email: string;
}
export interface IValidate {
  phone: boolean;
  email: boolean;
}

export type Unknown = Record<string, string>;
