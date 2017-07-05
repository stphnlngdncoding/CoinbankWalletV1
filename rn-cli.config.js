'use strict';

module.exports = {
  getTransformModulePath() {
    return require.resolve('./transformer');
  },
}