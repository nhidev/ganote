export interface IExtraRequest {
  host?: string;
}
export type IRequestInit = RequestInit & IExtraRequest;
