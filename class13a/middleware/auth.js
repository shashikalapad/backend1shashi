const jwt =require('jsonwebtoken');

function validateCredentials(req,res,next){
    const token = req.header('X_auth-Token');
    if(!token) return res.status(403).send("Access denied. no token is avaliable");
    try{
        const decoded = jwt.verify(token,"JWTprivatekey");
        req.user = decoded;
        console.log("decoded data....",decoded)
      next();
    }catch(err){
        return res.status(500).json({
            msg:"Internal Server error",
            error:err.message,
        });
    }
}
module.exports = {
    validateCredentials,
}