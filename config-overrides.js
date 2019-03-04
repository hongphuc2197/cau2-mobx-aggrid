const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra')
const { CustomizeAntd } = require('./src/config/antd')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: CustomizeAntd
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
  })
)
