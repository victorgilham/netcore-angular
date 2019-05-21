import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() {}
  confirm = (message: string, ok: () => any) => {
    alertify.confirm(message, e => {
      if (e) {
        ok();
      } else {
      }
    });
  };
  success = (message: string) => {
    alertify.success(message);
    // tslint:disable-next-line: semicolon
  };
  error = (message: string) => {
    alertify.error(message);
    // tslint:disable-next-line: semicolon
  };
  warning = (message: string) => {
    alertify.warning(message);
    // tslint:disable-next-line: semicolon
  };
  message = (message: string) => {
    alertify.message(message);
    // tslint:disable-next-line: semicolon
  };
}
