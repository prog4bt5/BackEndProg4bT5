import { Request, Response } from 'express';
import * as _ from 'lodash';
import TipoHabitacion from '../models/tipoHabitacion.model';
import { exec } from 'child_process';

export class TipoHabitacionController {
    crearTipoHabitacion = (req: Request, res: Response) => {
        const nuevaTipoHabitacion = new TipoHabitacion({
            tipoHabitacion: req.body.tipoHabitacion,
            costo: req.body.costo
        });

        nuevaTipoHabitacion.save()
        .then(tipoHabitacionCreada => {
            res.status(201).json({
                ok: true,
                tipoHabitacion: tipoHabitacionCreada,
                message: 'TipoHabitacion creada'
            });
        })
        .catch(error => {
            res.status(400).json({
                    ok: false,
                    error,
                    message: 'TipoHabitacion no creada'
            });
            
        });
    }

    obtenerTipoHabitacions = (req: Request, res: Response) => {
        TipoHabitacion.find()
        .then(tipoHabitaciones => {
            res.status(200).json({
                ok: true,
                tipoHabitaciones: tipoHabitaciones
            });
            /*
                [
                    {
                        _id: "kfhsdkfhskfhsd",
                        tipoHabitacion: "ESPAÑOL"
                    },
                    {
                        _id: "kfhsdkfhskfhsd",
                        tipoHabitacion: "QUÍMICA"
                    }
                ]
            */
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error
            });
        });
    }

    actualizarTipoHabitacion = (req: Request, res: Response) => {
        TipoHabitacion.findByIdAndUpdate(req.params.id,{
            tipoHabitacion: req.body.tipoHabitacion,
            costo: req.body.costo
        })
        .exec()
        .then(tipoHabitacionActualizada => {
            res.status(200).json({
                ok: true,
                tipoHabitacion: tipoHabitacionActualizada
            });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error,
                message: 'TipoHabitacion no actualizada'
            });
        });
    }

    eliminarTipoHabitacion = (req: Request, res: Response) => {
        TipoHabitacion.findByIdAndDelete(req.params.id)
        .then(tipoHabitacionEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'TipoHabitacion eliminada'
                });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error,
                message: 'TipoHabitacion no eliminada'
            });
        });
    }
}