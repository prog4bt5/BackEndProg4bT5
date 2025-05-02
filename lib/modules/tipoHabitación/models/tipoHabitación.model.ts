import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ITipoHabitacion extends mongoose.Document {  
    tipoHabitacion: string;
    costo: Number;
}

 const TipoHabitacionSchema = new Schema(
    {
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

    }
    
 );

const TipoHabitacion = mongoose.model<ITipoHabitacion>("TipoHabitacion", TipoHabitacionSchema);
export default TipoHabitacion;