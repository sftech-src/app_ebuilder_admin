import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BaseDbApiService, IAppConfig } from '@sftech/ng-shared';
import {
  IConfigurationCreateDto,
  IConfigurationResponseDto,
  IConfigurationUpdateDto,
} from '../dtos/configuration.dto';
import { Configuration } from '../models/configuration.model';

@Injectable({ providedIn: 'root' })
export class ConfigurationService extends BaseDbApiService<
  Configuration,
  IConfigurationCreateDto,
  IConfigurationUpdateDto,
  IConfigurationResponseDto
> {
  constructor(
    protected override readonly http: HttpClient,
    @Inject('APP_CONFIG') protected override readonly config: IAppConfig,
  ) {
    super(http, config);
    this.url = `${this.config['API_URL']}/cm/configuration`;
  }

  protected getNewModel(): Configuration {
    return new Configuration();
  }
}
