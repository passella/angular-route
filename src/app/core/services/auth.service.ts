import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _redirectUrl: string | null = null;

  constructor() {
  }

  get loggedIn(): boolean {
    return localStorage.getItem('logado') === "true"
  }

  set loggedIn(value: boolean) {
    localStorage.setItem('logado', String(value));
  }

  set redirectUrl(value: string) {
    this._redirectUrl = value;
  }

  get redirectUrl(): string | null {
    return this._redirectUrl;
  }

  clearRedirectUrl(): void {
    this._redirectUrl = null;
  }


}
