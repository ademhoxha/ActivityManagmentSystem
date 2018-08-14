class BaseFlow {
    applyFlow(req, res, next) { }
}

class BaseRevertFlow {
    revertFlow(data, callBack) { }
}

module.exports = {
    BaseFlow: BaseFlow,
    BaseRevertFlow: BaseRevertFlow
}