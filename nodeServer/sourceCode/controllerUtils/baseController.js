class BaseController {
    applyController(req, res, next) {
        next();
     }
}

module.exports ={
    BaseController : BaseController
}