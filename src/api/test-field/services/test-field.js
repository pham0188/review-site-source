'use strict';

/**
 * test-field service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-field.test-field');
