export interface IResponse<Data> {
  code: number;
  msg: string;
  data?: Data;
  result?: {
    error_code: number;
    message: string;
  };
}
