/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { IndicesGetIndexTemplateResponse } from '@elastic/elasticsearch/lib/api/types';
import { BaseTemplate } from './base_template';

export class IndexTemplate extends BaseTemplate<IndicesGetIndexTemplateResponse> {
  loadTemplates = (templates: IndicesGetIndexTemplateResponse) => {
    this.templates = (templates.index_templates ?? []).map(({ name }) => name).sort();
  };
}
