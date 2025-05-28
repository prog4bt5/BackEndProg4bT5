import { TipoHabitacionController } from "../controllers/tipoHabitacion.controller";

export class TipoHabitacionRoutes {
    private tipoHabitacionController: TipoHabitacionController = new TipoHabitacionController(); 
    
    public routes(app): void {
        app.route('/tipoHabitacion')
        .get(this.tipoHabitacionController.obtenerTipoHabitacions)
        .post(this.tipoHabitacionController.crearTipoHabitacion);

        app.route('/tipoHabitacion/:id')
        .put(this.tipoHabitacionController.actualizarTipoHabitacion)
        .delete(this.tipoHabitacionController.eliminarTipoHabitacion);
    }
}