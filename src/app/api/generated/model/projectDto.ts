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
import { VariantSummaryDto } from './variantSummaryDto';


export interface ProjectDto { 
    id: number;
    name: string;
    createdAt: string;
    createdBy: string;
    summary: string;
    description: string;
    variants: Array<VariantSummaryDto>;
    writeUsers: Array<string>;
    readUsers: Array<string>;
    isArchived: boolean;
    isWritable: boolean;
    isDeletable: boolean;
}

