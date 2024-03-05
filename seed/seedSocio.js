import { Socio } from "../models/index.js";

const seedSocio = async () => {
    try {

        await Socio.bulkCreate([
            {
                nroSocio: 1,
                nombre: `Juampi`,
                apellido: 'Turner',
                dni: 44444441,
                email: 'juampi@gmail.com',
                telefono: 123123123,
                direccion: 'av falsa 123',
                fechaNacimiento: '1990-08-14',
                observaciones: "Socio Generado Automaticamente",
            },
            {
                nroSocio: 2,
                nombre: `Gino`,
                apellido: 'Basile',
                dni: 44444442,
                email: 'gino@gmail.com',
                telefono: 123123123,
                direccion: 'av falsa 123',
                fechaNacimiento: '1973-05-28',
                observaciones: "Socio Generado Automaticamente",
            },
            {
                nroSocio: 3,
                nombre: `Ignacio`,
                apellido: 'Varela',
                dni: 44444443,
                email: 'ignacio@gmail.com',
                telefono: 123123123,
                direccion: 'av falsa 123',
                fechaNacimiento: '1987-09-19',
                observaciones: "Socio Generado Automaticamente",
            },
            {
                nroSocio: 4,
                nombre: `Matias`,
                apellido: 'Altmann',
                dni: 44444444,
                email: 'matias@gmail.com',
                telefono: 123123123,
                direccion: 'av falsa 123',
                fechaNacimiento: '2001-11-07',
                observaciones: "Socio Generado Automaticamente",
            },
            {
                nroSocio: 5,
                nombre: `Tomas`,
                apellido: 'Nobile',
                dni: 44444445,
                email: 'tomas@gmail.com',
                telefono: 123123123,
                direccion: 'av falsa 123',
                fechaNacimiento: '1978-03-10',
                observaciones: "Socio Generado Automaticamente",
            },
            {
                nroSocio: 6,
                nombre: `Reynaldo`,
                apellido: 'Calles',
                dni: 44444446,
                email: 'reynaldo@gmail.com',
                telefono: 123123123,
                direccion: 'av falsa 123',
                fechaNacimiento: '1995-01-23',
                observaciones: "Socio Generado Automaticamente",
            },
            {
                nroSocio: 7,
                nombre: `Juan Manuel`,
                apellido: 'Garcia',
                dni: 44444447,
                email: 'juanmanuel@gmail.com',
                telefono: 123123123,
                direccion: 'av falsa 123',
                fechaNacimiento: '1983-06-15',
                observaciones: "Socio Generado Automaticamente",
            },
            {
                nroSocio: 8,
                nombre: `Joaquin`,
                apellido: 'Dario',
                dni: 44444448,
                email: 'joaquin@gmail.com',
                telefono: 123123123,
                direccion: 'av falsa 123',
                fechaNacimiento: '1969-12-31',
                observaciones: "Socio Generado Automaticamente",
            },
            {
                nroSocio: 9,
                nombre: `Ingrid`,
                apellido: 'Ramos',
                dni: 44444449,
                email: 'ingrid@gmail.com',
                telefono: 123123123,
                direccion: 'av falsa 123',
                fechaNacimiento: '2004-04-02',
                observaciones: "Socio Generado Automaticamente",
            },
            {
                nroSocio: 10,
                nombre: `Pilar`,
                apellido: 'Rodriguez',
                dni: 44444450,
                email: 'pilar@gmail.com',
                telefono: 123123123,
                direccion: 'av falsa 123',
                fechaNacimiento: '1971-10-20',
                observaciones: "Socio Generado Automaticamente",
            }
        ]);
    } catch (error) {
        console.log(error.message);
    }
};

export default seedSocio;