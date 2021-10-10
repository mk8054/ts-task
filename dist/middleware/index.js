"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCeo = void 0;
const service_1 = require("../service");
const cs = new service_1.CommonService();
async function getCeo(request, response, next) {
    let list = await cs.getCeo();
    let ceo = cs.getEmployee(1, list);
    request.body.ceo = ceo;
    next();
}
exports.getCeo = getCeo;
//# sourceMappingURL=index.js.map