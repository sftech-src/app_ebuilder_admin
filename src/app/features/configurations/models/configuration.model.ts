import { BaseDbModel } from '@sftech/ng-shared';
import { IConfigurationResponseDto } from '../dtos/configuration.dto';

export class Configuration extends BaseDbModel {
  public name?: string;
  public description?: string;
  public deviceUuid?: string;
  public updatedAt?: Date;
  public storage?: Record<string, unknown>;

  public override propertiesToShow = ['name', 'description', 'deviceUuid'];

  public override propertyUINames = new Map<string, string>([
    ['name', 'Name'],
    ['description', 'Beschreibung'],
    ['deviceUuid', 'Geraete-UUID'],
  ]);

  public override fromDto(dto: IConfigurationResponseDto): Configuration {
    const model = new Configuration();
    model.id = dto.id;
    model.createdAt = dto.createdAt;
    model.name = dto.name;
    model.description = dto.description;
    model.deviceUuid = dto.deviceUuid;
    model.updatedAt = dto.updatedAt;
    model.storage = dto.storage;
    return model;
  }
}
