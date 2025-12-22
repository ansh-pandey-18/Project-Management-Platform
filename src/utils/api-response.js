//Defining standard format of API response
class ApiResponse{     //These are 4 parameters that should be present whenever we send any ApiResponse  (Status Code and data must be present, other 2 are optional)
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
    }
}

export { ApiResponse }
//Now every API response will have these fixed number of paramaters