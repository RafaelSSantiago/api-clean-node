import { MissingParamError, InvalidParamError } from '../erros'
import { HttpRequest, HttpResponse, Controller, EmailValidator } from '../protocols'
import { badResquest, serverError } from '../helpers/http-helper'

export class SingUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badResquest(new MissingParamError(field))
        }
      }

      const isValid = this.emailValidator.isValid(httpRequest.body.email as string)
      if (!isValid) {
        return badResquest(new InvalidParamError('email'))
      }

      if (httpRequest.body.password !== httpRequest.body.passwordConfirmation) {
        return badResquest(new InvalidParamError('passwordConfirmation'))
      }
    } catch (error) {
      return serverError()
    }
    return { statusCode: 200, body: 'sucess' }
  }
}
