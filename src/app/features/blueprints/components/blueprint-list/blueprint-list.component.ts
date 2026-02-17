import { Component, inject } from '@angular/core';
import { BaseListComponent, PaginatorComponent } from '@sftech/ng-shared';
import { Button } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { Panel } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import {
  IActorBlueprintCreateDto,
  IActorBlueprintResponseDto,
  IActorBlueprintUpdateDto,
} from '../../dtos/actor-blueprint.dto';
import { ActorBlueprint } from '../../models/actor-blueprint.model';
import { ActorBlueprintService } from '../../services/actor-blueprint.service';
import { BlueprintDisplayComponent } from '../blueprint-display/blueprint-display.component';

@Component({
  selector: 'app-blueprint-list',
  imports: [PaginatorComponent, Panel, TableModule, Button],
  providers: [DialogService],
  templateUrl: './blueprint-list.component.html',
})
export class BlueprintListComponent extends BaseListComponent<
  ActorBlueprint,
  IActorBlueprintCreateDto,
  IActorBlueprintUpdateDto,
  IActorBlueprintResponseDto
> {
  protected _repo = inject(ActorBlueprintService);
  protected _route = 'blueprints';
  protected override _modalComponent = BlueprintDisplayComponent;
  protected override detailModalHeaderText = 'Blueprint-Details';
}
