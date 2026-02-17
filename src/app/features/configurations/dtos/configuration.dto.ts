import {
  IBaseDbCreateDto,
  IBaseDbResponseDto,
  IBaseDbUpdateDto,
} from '@sftech/ng-shared';

export interface IConfigurationCreateDto extends IBaseDbCreateDto {
  name: string;
  description?: string;
  deviceUuid?: string;
}

export interface IConfigurationUpdateDto extends IBaseDbUpdateDto {
  name?: string;
  description?: string;
  deviceUuid?: string;
}

export interface IConfigurationResponseDto extends IBaseDbResponseDto {
  name: string;
  description: string;
  deviceUuid: string;
  updatedAt: Date;
  storage: Record<string, unknown>;
}
