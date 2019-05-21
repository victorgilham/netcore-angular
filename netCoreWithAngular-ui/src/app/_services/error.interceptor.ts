import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept = (
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> => {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            console.log(error, 'this is the error');
            return throwError(error.statusText);
          }

          const applicationHeadersError = error.headers.get(
            'Application-error'
          );
          const serverError = error.error;
          let modalStateErrors = '';
          if (applicationHeadersError) {
            console.error(applicationHeadersError);
            return throwError(applicationHeadersError);
          }
          if (serverError && typeof serverError === 'object') {
            for (const key in serverError) {
              if (serverError[key]) {
                modalStateErrors += serverError[key] + '\n';
              }
            }
          }
          return throwError(modalStateErrors || serverError || 'Server error');
        }
      })
    );
    // tslint:disable-next-line: semicolon
  };
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
