import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BaseDbApiService, IAppConfig } from '@sftech/ng-shared';
import {
  IActorBlueprintCreateDto,
  IActorBlueprintResponseDto,
  IActorBlueprintUpdateDto,
} from '../dtos/actor-blueprint.dto';
import { ActorBlueprint } from '../models/actor-blueprint.model';

@Injectable({ providedIn: 'root' })
export class ActorBlueprintService extends BaseDbApiService<
  ActorBlueprint,
  IActorBlueprintCreateDto,
  IActorBlueprintUpdateDto,
  IActorBlueprintResponseDto
> {
  constructor(
    protected override readonly http: HttpClient,
    @Inject('APP_CONFIG') protected override readonly config: IAppConfig,
  ) {
    super(http, config);
    this.url = `${this.config['API_URL']}/cm/actor-blueprint`;
  }

  protected getNewModel(): ActorBlueprint {
    return new ActorBlueprint();
  }
}
