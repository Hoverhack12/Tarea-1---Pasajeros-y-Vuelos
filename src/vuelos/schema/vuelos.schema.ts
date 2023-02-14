import mongoose from 'mongoose';

export const VuelosSchema = new mongoose.Schema({
  id_vuelo: { type: String, require: true },
  capacidad: { type: String, require: true },
  modelo: { type: String, require: true },
  compañia: { type: String, require: true },
},
{
    timestamps:true
}
);

VuelosSchema.index({id_vuelo:1},{unique:true});
VuelosSchema.index({modelo:1},{unique:true});
