import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  public get backendUrl(): string {
    return environment.backendUrl;
  }

  public constructor() {}
}
