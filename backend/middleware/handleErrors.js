const {GeneralError, BadRequest, NotFound} = require("../utils/errors");

const handleErrors = (err, req, res, next) => {
    if (err instanceof NotFound){
        return res.status(err.getStatusCode()).json({
            status: "Error",
            message: err.message
        })
    }
    else if (err instanceof BadRequest){
        return res.status(err.getStatusCode()).json({
            status: "Error",
            message: err.message
        })
    }

    return res.status(500).json({
        status: "Error",
        message: "Something went wrong!"
    })
}

module.exports = handleErrors;