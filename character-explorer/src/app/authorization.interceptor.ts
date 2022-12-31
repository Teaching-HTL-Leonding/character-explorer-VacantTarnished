import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HYPIXEL_KEY } from './app.module';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(@Inject(HYPIXEL_KEY) private hypixelKey: string) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.startsWith('https://api.hypixel.net/')) {
      return next.handle(request.clone({
        setHeaders: {
          'API-Key': this.hypixelKey
        }
      }));
    }

    return next.handle(request);
  }
}
