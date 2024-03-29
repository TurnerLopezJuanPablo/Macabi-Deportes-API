import { ContactoEmergencia } from "../models/index.js";

const seedContactoEmergencia = async () => {
    try {

        await ContactoEmergencia.bulkCreate([
            {
                nombre: "Policia",
                telefono: "911",
            },
            {
                nombre: "Bomberos",
                telefono: "100",
                observaciones: "Ante un incendio avisar al coordinador general para la evacuación"
            },
            {
                nombre: "Hospital",
                telefono: "105",
            },
            {
                nombre: "Gerente",
                email: "gerencia@gmail.com",
                telefono: "1122334455",
                observaciones: "Gerencia"
            },
            {
                nombre: "Coordinador",
                email: "admin@mail.con",
            },
        ]);
    } catch (error) {
        console.log(error.message);
    }
};

export default seedContactoEmergencia;