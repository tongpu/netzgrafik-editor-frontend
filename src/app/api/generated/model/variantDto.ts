/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import {VersionDto} from "./versionDto";

export interface VariantDto {
  id: number;
  projectId: number;
  versions: Array<VersionDto>;
  latestVersion: VersionDto;
  isArchived: boolean;
  isWritable: boolean;
  isDeletable: boolean;
}
