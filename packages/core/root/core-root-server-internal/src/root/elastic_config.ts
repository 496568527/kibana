/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { schema, TypeOf } from '@kbn/config-schema';
import { apmConfigSchema } from '@kbn/apm-config-loader';
import type { ServiceConfigDescriptor } from '@kbn/core-base-server-internal';

const elasticConfig = schema.object({
  apm: apmConfigSchema,
});

export type ElasticConfigType = TypeOf<typeof elasticConfig>;

export const elasticApmConfig: ServiceConfigDescriptor<ElasticConfigType> = {
  path: 'elastic',
  schema: elasticConfig,
};