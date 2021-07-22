import Joi from '@hapi/joi'

export const register_validation = data => {
  const schema = Joi.object({
    name: Joi.string().min(8).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required()
  })

  return schema.validate(data)
}

export const login_validation = data => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required()
  })

  return schema.validate(data)
}