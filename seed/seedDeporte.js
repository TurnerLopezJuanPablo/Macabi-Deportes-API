import { Deporte } from "../models/index.js";

const seedDeporte = async () => {
    try {

        await Deporte.bulkCreate([
            {
                nombre: "Voley"
            },
            {
                nombre: "Futbol"
            },
            {
                nombre: "Basket"
            },
            {
                nombre: "Ajedrez"
            },
        ]);
    } catch (error) {
        console.log(error.message);
    }
};

export default seedDeporte;