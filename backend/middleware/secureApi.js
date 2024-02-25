let secureApi = (req,res,next) => {
    console.log("ami",req.headers)
    
    if (req.headers.authorizaition == "w70AEQPO5HOJUn") {
        next();
    } else {
        res.send({error: "Invalid api "})
    }
}



//  mongodb+srv://newmernian:@cluster0.zkgjyio.mongodb.net/mernian?retryWrites=true&w=majority&appName=Cluster0
module.exports = secureApi;