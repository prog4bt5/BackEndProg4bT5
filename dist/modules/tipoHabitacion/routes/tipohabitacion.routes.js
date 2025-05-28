"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoHabitacionRoutes = void 0;
const tipoHabitacion_controller_1 = require("../controllers/tipoHabitacion.controller");
class TipoHabitacionRoutes {
    constructor() {
        this.tipoHabitacionController = new tipoHabitacion_controller_1.TipoHabitacionController();
    }
    routes(app) {
        app.route('/tipoHabitacion')
            .get(this.tipoHabitacionController.obtenerTipoHabitacions)
            .post(this.tipoHabitacionController.crearTipoHabitacion);
        app.route('/tipoHabitacion/:id')
            .put(this.tipoHabitacionController.actualizarTipoHabitacion)
            .delete(this.tipoHabitacionController.eliminarTipoHabitacion);
    }
}
exports.TipoHabitacionRoutes = TipoHabitacionRoutes;
//# sourceMappingURL=tipohabitacion.routes.js.map