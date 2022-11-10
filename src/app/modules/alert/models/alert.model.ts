import { EAlert } from "../enums/alert.enum";

export class Alert {
  public type: EAlert = EAlert.error;
  public message = '';
  public autoClose = true;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}
