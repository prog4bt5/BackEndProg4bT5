"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TipoHabitacionSchema = new Schema({
    tipoHabitacion: {
        type: String,
        required: [true, 'tipoHabitacion es requerido'],
        unique: true
    },
    costo: {
        type: Number,
        required: [true, 'costo es requerido']
    }
});
const TipoHabitacion = mongoose.model("TipoHabitacion", TipoHabitacionSchema);
exports.default = TipoHabitacion;
//# sourceMappingURL=tipoHabitacion.model.js.map