import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BaseDialogComponent, BaseDisplayComponent } from '@sftech/ng-shared';
import { Button } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import {
  IActorBlueprintCreateDto,
  IActorBlueprintResponseDto,
  IActorBlueprintUpdateDto,
} from '../../dtos/actor-blueprint.dto';
import { ActorBlueprint } from '../../models/actor-blueprint.model';
import { ActorBlueprintService } from '../../services/actor-blueprint.service';

@Component({
  selector: 'app-blueprint-display',
  imports: [
    ReactiveFormsModule,
    InputText,
    FloatLabel,
    Textarea,
    Button,
    BaseDialogComponent,
    Fieldset,
    Checkbox,
  ],
  templateUrl: './blueprint-display.component.html',
})
export class BlueprintDisplayComponent extends BaseDisplayComponent<
  ActorBlueprint,
  IActorBlueprintCreateDto,
  IActorBlueprintUpdateDto,
  IActorBlueprintResponseDto
> {
  protected override _repo = inject(ActorBlueprintService);
  protected override _route = 'blueprints';

  protected override initializeForm(): FormGroup {
    return new FormGroup({
      id: new FormControl({ value: this.model()!.id, disabled: true }),
      createdAt: new FormControl({
        value: this.model()!.createdAt,
        disabled: true,
      }),
      name: new FormControl(
        { value: this.model()!.name, disabled: !this.canEdit },
        Validators.required,
      ),
      articleNumber: new FormControl({
        value: this.model()!.articleNumber,
        disabled: !this.canEdit,
      }),
      ean: new FormControl({
        value: this.model()!.ean,
        disabled: !this.canEdit,
      }),
      identifier: new FormControl({
        value: this.model()!.identifier,
        disabled: !this.canEdit,
      }),
      url: new FormControl({
        value: this.model()!.url,
        disabled: !this.canEdit,
      }),
      actorType: new FormControl({
        value: this.model()!.actorType,
        disabled: !this.canEdit,
      }),
      connectionType: new FormControl({
        value: this.model()!.connectionType,
        disabled: !this.canEdit,
      }),
      functions: new FormControl({
        value: this.model()!.functions,
        disabled: !this.canEdit,
      }),
      mountingType: new FormControl({
        value: this.model()!.mountingType,
        disabled: !this.canEdit,
      }),
      partitionUnit: new FormControl({
        value: this.model()!.partitionUnit,
        disabled: !this.canEdit,
      }),
      powerConsumption: new FormControl({
        value: this.model()!.powerConsumption,
        disabled: !this.canEdit,
      }),
      thermalLoss: new FormControl({
        value: this.model()!.thermalLoss,
        disabled: !this.canEdit,
      }),
      numberOfInputs: new FormControl({
        value: this.model()!.numberOfInputs,
        disabled: !this.canEdit,
      }),
      numberOfOutputs: new FormControl({
        value: this.model()!.numberOfOutputs,
        disabled: !this.canEdit,
      }),
      price: new FormControl({
        value: this.model()!.price,
        disabled: !this.canEdit,
      }),
      lastPriceUpdate: new FormControl({
        value: this.model()!.lastPriceUpdate,
        disabled: !this.canEdit,
      }),
      isOutdoorEligible: new FormControl({
        value: this.model()!.isOutdoorEligible,
        disabled: !this.canEdit,
      }),
    });
  }

  protected override getNewModel(): ActorBlueprint {
    return new ActorBlueprint();
  }

  protected override mapFormToCreateDto(): IActorBlueprintCreateDto {
    return {
      name: this.form.get('name')?.value,
      articleNumber: this.form.get('articleNumber')?.value,
      ean: this.form.get('ean')?.value,
      identifier: this.form.get('identifier')?.value,
      url: this.form.get('url')?.value,
      actorType: this.form.get('actorType')?.value,
      connectionType: this.form.get('connectionType')?.value,
      functions: this.form.get('functions')?.value,
      mountingType: this.form.get('mountingType')?.value,
      partitionUnit: this.form.get('partitionUnit')?.value,
      powerConsumption: this.form.get('powerConsumption')?.value,
      thermalLoss: this.form.get('thermalLoss')?.value,
      numberOfInputs: this.form.get('numberOfInputs')?.value,
      numberOfOutputs: this.form.get('numberOfOutputs')?.value,
      price: this.form.get('price')?.value,
      lastPriceUpdate: this.form.get('lastPriceUpdate')?.value,
      isOutdoorEligible: this.form.get('isOutdoorEligible')?.value,
    };
  }

  protected override mapFormToUpdateDto(): IActorBlueprintUpdateDto {
    return this.mapFormToCreateDto();
  }
}
