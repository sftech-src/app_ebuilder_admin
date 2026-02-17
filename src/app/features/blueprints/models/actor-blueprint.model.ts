import { BaseDbModel } from '@sftech/ng-shared';
import { IActorBlueprintResponseDto } from '../dtos/actor-blueprint.dto';

export class ActorBlueprint extends BaseDbModel {
  public articleNumber?: string;
  public ean?: string;
  public name?: string;
  public identifier?: string;
  public url?: string;
  public partitionUnit?: string;
  public powerConsumption?: number;
  public thermalLoss?: number;
  public numberOfInputs?: number;
  public numberOfOutputs?: number;
  public actorType?: string;
  public connectionType?: string;
  public functions?: string;
  public isOutdoorEligible?: boolean;
  public mountingType?: string;
  public price?: number;
  public lastPriceUpdate?: string;

  public override propertiesToShow = [
    'name',
    'articleNumber',
    'actorType',
    'connectionType',
    'price',
  ];

  public override propertyUINames = new Map<string, string>([
    ['name', 'Name'],
    ['articleNumber', 'Artikelnummer'],
    ['actorType', 'Typ'],
    ['connectionType', 'Anschluss'],
    ['price', 'Preis'],
  ]);

  public override fromDto(dto: IActorBlueprintResponseDto): ActorBlueprint {
    const model = new ActorBlueprint();
    model.id = dto.id;
    model.createdAt = dto.createdAt;
    model.articleNumber = dto.articleNumber;
    model.ean = dto.ean;
    model.name = dto.name;
    model.identifier = dto.identifier;
    model.url = dto.url;
    model.partitionUnit = dto.partitionUnit;
    model.powerConsumption = dto.powerConsumption;
    model.thermalLoss = dto.thermalLoss;
    model.numberOfInputs = dto.numberOfInputs;
    model.numberOfOutputs = dto.numberOfOutputs;
    model.actorType = dto.actorType;
    model.connectionType = dto.connectionType;
    model.functions = dto.functions;
    model.isOutdoorEligible = dto.isOutdoorEligible;
    model.mountingType = dto.mountingType;
    model.price = dto.price;
    model.lastPriceUpdate = dto.lastPriceUpdate;
    return model;
  }
}
