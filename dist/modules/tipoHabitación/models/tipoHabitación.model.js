"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TipoHabitacionSchema = new Schema({
    tipoHabitacion: {
        type: String,
        required: [true, 'materia required'],
        unique: false
    },
    costo: {
        type: Number,
        required: [true, 'materia required'],
        unique: false
    }
});
const TipoHabitacion = mongoose.model("TipoHabitacion", TipoHabitacionSchema);
exports.default = TipoHabitacion;
//# sourceMappingURL=tipoHabitaci%C3%B3n.model.js.map