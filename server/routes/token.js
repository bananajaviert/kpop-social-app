import jwt from 'jsonwebtoken'

export const verify_token = async (req, res, next) => {
  // Check if token is available
  const token = await req.header('auth-token')
  if(!token) return res.status(401).json('Access denied')

  try {
    
    // Verify user
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    req.user = verified
    next()

  }catch(error) {
    res.status(400).json('Invalid token')
  }

}