const { Mongoose } = require("mongoose");

class GeneralError extends Error{
    constructor(message){
        super();
        this.message = message;
    }

    getStatusCode(){
    
        if (this instanceof NotFound){
            return 404;
        }
        if (this instanceof BadRequest){
            return 400;
        }
        else{
            return 500;
        }
        

    }
}

class BadRequest extends GeneralError{};
class NotFound extends GeneralError{};

module.exports = {GeneralError, BadRequest, NotFound}