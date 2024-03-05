import { Categoria } from "../models/index.js";

const seedCategoria = async () => {
    try {

        await Categoria.bulkCreate([
            {
                nombreCategoria: "2004 Menores",
                idDeporte:1,
            },
            {
                nombreCategoria: "2004 Mayores",
                idDeporte:1,
            },
            {
                nombreCategoria: "2005 general",
                idDeporte:1,
            },
            {
                nombreCategoria: "2004",
                idDeporte:2,
            },
            {
                nombreCategoria: "2005",
                idDeporte:2,
            },
            {
                nombreCategoria: "2006",
                idDeporte:2,
            },
            {
                nombreCategoria: "2007",
                idDeporte:2,
            },
            {
                nombreCategoria: "Principiantes",
                idDeporte:3,
            },
            {
                nombreCategoria: "Intermedios",
                idDeporte:3,
            },
            {
                nombreCategoria: "Avanzados",
                idDeporte:3,
            },
            {
                nombreCategoria: "2010 en adelante",
                idDeporte:4,
            },
        ]);
    } catch (error) {
        console.log(error.message);
    }
};

export default seedCategoria;