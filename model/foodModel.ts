import { Schema, model } from 'mongoose';


export interface IUser {
    name: string;
    kind: string;
    calories?: Number;
}


const foodSchema = new Schema ({
    name: { 
        type: String, 
        required: true 
    },
    kind: { 
        type: String, 
        required: true 
    },
    calories: {
        type: Number,
        default: 0,
        // required: true
    },
},
{
    timestamps: true
});


const foodModel = model<IUser>('Food', foodSchema);
export default foodModel


