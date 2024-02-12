import config from './jest.config'

const unitConfig = {
  testRegex: '(/__tests__/.*|(\\.|/)spec)\\.tsx?$'
}

export default { ...config, ...unitConfig }
