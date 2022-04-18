const { Teacher } = require('../models')
const middleware = require('../middleware')


const Login = async (req, res) => {
  try {

    const user = await Teacher.findOne({
      where: { username: req.body.username },
      raw: true
    })

    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username,

      }
      let token = middleware.createToken
      (payload)
      return res.send ({user: payload, token})
    }
    res.status(401).send({status: 'Error', msg: 'Unauthorized'})



  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { password, email, firstName, lastName, username, experience, about, image } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await Teacher.create({
        email, firstName, lastName, username, experience, about, image, passwordDigest
    })
    res.send(user)


  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register,
}
