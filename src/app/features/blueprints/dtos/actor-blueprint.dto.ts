import {
  IBaseDbCreateDto,
  IBaseDbResponseDto,
  IBaseDbUpdateDto,
} from '@sftech/ng-shared';

export interface IActorBlueprintCreateDto extends IBaseDbCreateDto {
  articleNumber?: string;
  ean?: string;
  name: string;
  identifier?: string;
  url?: string;
  partitionUnit?: string;
  powerConsumption?: number;
  thermalLoss?: number;
  numberOfInputs?: number;
  numberOfOutputs?: number;
  actorType?: string;
  connectionType?: string;
  functions?: string;
  isOutdoorEligible?: boolean;
  mountingType?: string;
  price?: number;
  lastPriceUpdate?: string;
}

export interface IActorBlueprintUpdateDto extends IBaseDbUpdateDto {
  articleNumber?: string;
  ean?: string;
  name?: string;
  identifier?: string;
  url?: string;
  partitionUnit?: string;
  powerConsumption?: number;
  thermalLoss?: number;
  numberOfInputs?: number;
  numberOfOutputs?: number;
  actorType?: string;
  connectionType?: string;
  functions?: string;
  isOutdoorEligible?: boolean;
  mountingType?: string;
  price?: number;
  lastPriceUpdate?: string;
}

export interface IActorBlueprintResponseDto extends IBaseDbResponseDto {
  articleNumber: string;
  ean: string;
  name: string;
  identifier: string;
  url: string;
  partitionUnit: string;
  powerConsumption: number;
  thermalLoss: number;
  numberOfInputs: number;
  numberOfOutputs: number;
  actorType: string;
  connectionType: string;
  functions: string;
  isOutdoorEligible: boolean;
  mountingType: string;
  price: number;
  lastPriceUpdate: string;
}
