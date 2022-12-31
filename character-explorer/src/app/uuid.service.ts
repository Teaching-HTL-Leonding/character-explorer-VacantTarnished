import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UUIDResponse {
  id: string;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UuidService {

  constructor(private httpClient: HttpClient) { }

  private baseUUIDUrl = "https://api.minetools.eu/uuid/";

  getUUID(username: string): Observable<UUIDResponse> {
    return this.httpClient.get<UUIDResponse>(this.baseUUIDUrl + username);
  }
}
