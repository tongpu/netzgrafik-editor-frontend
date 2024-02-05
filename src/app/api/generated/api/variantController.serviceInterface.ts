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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { VariantCreateDto } from '../model/models';
import { VariantCreateFromVersionDto } from '../model/models';
import { VariantDto } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface VariantControllerBackendServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param variantId 
     */
    archiveVariant(variantId: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param projectId 
     * @param variantCreateDto 
     */
    createVariant(projectId: number, variantCreateDto: VariantCreateDto, extraHttpRequestParams?: any): Observable<number>;

    /**
     * 
     * 
     * @param versionId 
     * @param variantCreateFromVersionDto 
     */
    createVariantFromVersion(versionId: number, variantCreateFromVersionDto: VariantCreateFromVersionDto, extraHttpRequestParams?: any): Observable<number>;

    /**
     * 
     * 
     * @param variantId 
     */
    deleteVariant(variantId: number, extraHttpRequestParams?: any): Observable<string>;

    /**
     * 
     * 
     * @param variantId 
     */
    dropSnapshots(variantId: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param variantId 
     */
    getVariant(variantId: number, extraHttpRequestParams?: any): Observable<VariantDto>;

    /**
     * 
     * 
     * @param variantId 
     */
    raiseSnapshotsToNewestReleaseVersion(variantId: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param variantId 
     */
    unarchiveVariant(variantId: number, extraHttpRequestParams?: any): Observable<{}>;

}
