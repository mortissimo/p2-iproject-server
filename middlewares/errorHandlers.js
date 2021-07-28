function errorHandler(err, req, res, next){
    switch(err.name){  
        case "BadRequest" :{
            if(typeof(err.message) === 'object'){
                err.message.errors= err.message.map(data =>{
                    return data+'<br>';
                })
                res.status(400).json(err.message.errors.join(''));
            }else{
                res.status(400).json(err.message);
            }
            break;
        }
        case "Exceed size limit" :{
            if(typeof(err.message) === 'object'){
                err.message.errors= err.message.map(data =>{
                    return data+'<br>';
                })
                res.status(400).json(err.message.errors.join(''));
            }else{
                res.status(400).json(err.message);
            }
            break;
        }
        case "Unauthorized" :{
            if(typeof(err.message) === 'object'){
                err.message.errors= err.message.map(data =>{
                    return data+'<br>';
                })
                res.status(401).json(err.message.errors.join(''));
            }else{
                res.status(401).json(err.message);
            }
            break;
        }
        case "Forbidden" :{
            if(typeof(err.message) === 'object'){
                err.message.errors= err.message.map(data =>{
                    return data+'<br>';
                })
                res.status(403).json(err.message.errors.join(''));
            }else{
                res.status(403).json(err.message);
            }
            break;
        }
        case "NotFound" :{
            if(typeof(err.message) === 'object'){
                err.message.errors= err.message.map(data =>{
                    return data+'<br>';
                })
                res.status(404).json(err.message.errors.join(''));
            }else{
                res.status(404).json(err.message);
            }
            break;
        }
        case "InternalServerError" :{
            if(typeof(err.message) === 'object'){
                err.message.errors= err.message.map(data =>{
                    return data+'<br>';
                })
                res.status(500).json(err.message.errors.join(''));
            }else{
                res.status(500).json(err.message);
            }
            break;
        }
        default :{
            if(typeof(err.message) === 'object'){
                err.message.errors= err.message.map(data =>{
                    return data+'<br>';
                })
                res.status(err.status).json(err.message.errors.join(''));
            }else{
                res.status(err.status).json(err.message);
            }
            break;
        }
    }
}

module.exports = errorHandler;