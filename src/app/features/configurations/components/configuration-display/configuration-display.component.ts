import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BaseDialogComponent, BaseDisplayComponent } from '@sftech/ng-shared';
import { Button } from 'primeng/button';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import {
  IConfigurationCreateDto,
  IConfigurationResponseDto,
  IConfigurationUpdateDto,
} from '../../dtos/configuration.dto';
import { Configuration } from '../../models/configuration.model';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'app-configuration-display',
  imports: [
    ReactiveFormsModule,
    InputText,
    FloatLabel,
    Textarea,
    Button,
    BaseDialogComponent,
    Fieldset,
    JsonPipe,
  ],
  templateUrl: './configuration-display.component.html',
})
export class ConfigurationDisplayComponent extends BaseDisplayComponent<
  Configuration,
  IConfigurationCreateDto,
  IConfigurationUpdateDto,
  IConfigurationResponseDto
> {
  protected override _repo = inject(ConfigurationService);
  protected override _route = 'configurations';

  protected override initializeForm(): FormGroup {
    return new FormGroup({
      id: new FormControl({ value: this.model()!.id, disabled: true }),
      createdAt: new FormControl({
        value: this.model()!.createdAt,
        disabled: true,
      }),
      name: new FormControl(
        {
          value: this.model()!.name,
          disabled: !this.canEdit,
        },
        Validators.required,
      ),
      description: new FormControl({
        value: this.model()!.description,
        disabled: !this.canEdit,
      }),
      deviceUuid: new FormControl({
        value: this.model()!.deviceUuid,
        disabled: !this.canEdit,
      }),
    });
  }

  protected override getNewModel(): Configuration {
    return new Configuration();
  }

  protected override mapFormToCreateDto(): IConfigurationCreateDto {
    return {
      name: this.form.get('name')?.value,
      description: this.form.get('description')?.value,
      deviceUuid: this.form.get('deviceUuid')?.value,
    };
  }

  protected override mapFormToUpdateDto(): IConfigurationUpdateDto {
    return this.mapFormToCreateDto();
  }
}
