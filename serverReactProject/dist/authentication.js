import jwt from "jsonwebtoken";
//main function
function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token)
        return res.send(new Error('there is no token'));
    if (!process.env.ACCESS_TOKEN_SECRET)
        return res.send(new Error('no secret key'));
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userPassword) => {
        if (err)
            res.send(new Error('invalid token'));
        // req.userPassword = userPassword
        next();
    });
}
export { authenticationToken };
