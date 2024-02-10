import { MissingParamError } from '../erros/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badResquest } from '../helpers/http-helper'

export class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badResquest(new MissingParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badResquest(new MissingParamError('email'))
    }

    return { statusCode: 200, body: 'sucess' }
  }
}
