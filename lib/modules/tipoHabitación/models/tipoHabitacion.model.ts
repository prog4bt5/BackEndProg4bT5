import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ITipoHabitacion extends mongoose.Document {  
    tipoHabitacion: string;
    costo: number;

}
    

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

const TipoHabitacion = mongoose.model<ITipoHabitacion>("TipoHabitacion", TipoHabitacionSchema);
export default TipoHabitacion;