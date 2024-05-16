/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Security = {
    apiKeyAuth: string;
};

/** @internal */
export namespace Security$ {
    export const inboundSchema: z.ZodType<Security, z.ZodTypeDef, unknown> = z
        .object({
            ApiKeyAuth: z.string(),
        })
        .transform((v) => {
            return {
                apiKeyAuth: v.ApiKeyAuth,
            };
        });

    export type Outbound = {
        ApiKeyAuth: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Security> = z
        .object({
            apiKeyAuth: z.string(),
        })
        .transform((v) => {
            return {
                ApiKeyAuth: v.apiKeyAuth,
            };
        });
}
