import { MissingParamError } from '../erros/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badResquest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class SingUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badResquest(new MissingParamError(field))
      }
    }
    return { statusCode: 200, body: 'sucess' }
  }
}
