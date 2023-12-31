/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { i18n } from '@kbn/i18n';

export const enableControl = i18n.translate('xpack.cloudDefend.enableControl', {
  defaultMessage: 'Enable BPF/LSM controls',
});

export const enableControlHelp = i18n.translate('xpack.cloudDefend.enableControlHelp', {
  defaultMessage:
    'Enables BPF/LSM control mechanism, for use with FIM and container drift prevention.',
});
