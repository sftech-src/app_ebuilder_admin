import { Component, inject } from '@angular/core';
import { BaseListComponent, PaginatorComponent } from '@sftech/ng-shared';
import { Button } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { Panel } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import {
  IConfigurationCreateDto,
  IConfigurationResponseDto,
  IConfigurationUpdateDto,
} from '../../dtos/configuration.dto';
import { Configuration } from '../../models/configuration.model';
import { ConfigurationService } from '../../services/configuration.service';
import { ConfigurationDisplayComponent } from '../configuration-display/configuration-display.component';

@Component({
  selector: 'app-configuration-list',
  imports: [PaginatorComponent, Panel, TableModule, Button],
  providers: [DialogService],
  templateUrl: './configuration-list.component.html',
})
export class ConfigurationListComponent extends BaseListComponent<
  Configuration,
  IConfigurationCreateDto,
  IConfigurationUpdateDto,
  IConfigurationResponseDto
> {
  protected _repo = inject(ConfigurationService);
  protected _route = 'configurations';
  protected override _modalComponent = ConfigurationDisplayComponent;
  protected override detailModalHeaderText = 'Konfigurations-Details';
}
