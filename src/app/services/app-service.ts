import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { IApiResponse } from '../models/api-response.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppEnums } from '../enums/app.enums';
import { IAppSession } from '../models/app-session.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _appSession = signal<IAppSession | null>(null);
  readonly appSession = this._appSession.asReadonly();
  constructor(private httpClient: HttpClient, private router: Router) {}

  navigateTo(routeLink: string) {
    this.router.navigate([routeLink]);
  }
  setSessionData(key: string, value: any) {
    const existing = sessionStorage.getItem(key);
    let newValue = value;
    if (existing) {
      const parsed = JSON.parse(existing);
      newValue = { ...parsed, ...value };
    }
    sessionStorage.setItem(key, JSON.stringify(newValue));
    if (key === AppEnums.APP_SESSION) {
      this._appSession.set(newValue);
    }
  }

  getSessionData(key: string) {
    const data = sessionStorage.getItem(key);
    if (key === AppEnums.APP_SESSION) {
      this._appSession.set(data ? JSON.parse(data) : null);
    }
    return data ? JSON.parse(data) : null;
  }

  makePostRequest(fullUrl: string, data: any): Observable<IApiResponse> {
    return this.httpClient.post<IApiResponse>(fullUrl, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: this.getAuthHeader(),
      },
    });
  }
  getAuthHeader(): string {
    return '';
  }

  makeAuthPostRequest(fullUrl: string, data: any): Observable<IApiResponse> {
    return this.httpClient.post<IApiResponse>(fullUrl, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }

  makePutRequest(fullUrl: string, data: any): Observable<IApiResponse> {
    return this.httpClient.put<IApiResponse>(fullUrl, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: this.getAuthHeader(),
      },
    });
  }
  makeGetRequest(fullUrl: string): Observable<IApiResponse> {
    return this.httpClient.get<IApiResponse>(fullUrl, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: this.getAuthHeader(),
      },
    });
  }

  makeDeleteRequest(fullUrl: string): Observable<IApiResponse> {
    return this.httpClient.delete<IApiResponse>(fullUrl, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: this.getAuthHeader(),
      },
    });
  }
}
