let secureApi = (req,res,next) => {
  
    
    if (req.headers.authorization == "w70AEQPO5HOJUn") {
        next();
    } else {
         res.status(401);
        res.send({error: "Invalid api "})
    }
}



//  mongodb+srv://newmernian:@cluster0.zkgjyio.mongodb.net/mernian?retryWrites=true&w=majority&appName=Cluster0
module.exports = secureApi;