import config from './jest.config'

const integrationConfig = {
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.tsx?$'
}

export default { ...config, ...integrationConfig }
