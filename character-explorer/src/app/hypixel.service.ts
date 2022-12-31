import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SkyblockDataResponse {
  success: boolean;
  profiles: SkyblockProfile[];
}

export interface SkyblockProfile {
  profile_id: string;
  cute_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class HypixelService {

  private baseHypixelUrl = "https://api.hypixel.net/";
  private profileRoute = "skyblock/profiles";

  constructor(private httpClient: HttpClient) { }

  getSkyblockData(uuid: string): Observable<SkyblockDataResponse> {
    return this.httpClient.get<SkyblockDataResponse>(`${this.baseHypixelUrl}${this.profileRoute}?uuid=${uuid}`);
  }
}
