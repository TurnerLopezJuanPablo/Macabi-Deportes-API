import { Usuario } from "../models/index.js";

const seedUsuario = async () => {
    try {

        await Usuario.bulkCreate([
            {
                nombre: `Marcos`,
                apellido: `Diaz`,
                fechaNacimiento: '2005-12-12',
                dni: 45876234,
                email: 'DiazMarcos@gmail.com',
                clave: 'Administrador12345',
                direccion: 'Corrientes 123',
                telefono:"1234567891",
                activo: true,
                idRol: 1
            },
            {
                nombre: `Martin`,
                apellido: `Apolo`,
                fechaNacimiento: '1991-01-12',
                dni: 32856244,
                email: 'ApoloMartin@gmail.com',
                clave: 'Administrador54321',
                direccion: 'Rivadavia 567',
                telefono:"1987654321",
                activo: true,
                idRol: 1
            },
            {
                nombre: `Martina`,
                apellido: `Perez`,
                fechaNacimiento: '1998-07-21',
                dni: 22528821,
                email: 'PerezMartina@gmail.com',
                clave: 'Inhabilitado889',
                direccion: 'Ecuador 2223',
                telefono:"1020304050",
                activo: true,
                idRol: 2
            },
            {
                nombre: `Carlos`,
                apellido: `Rodriguez`,
                fechaNacimiento: '1976-03-05',
                dni: 34183993,
                email: 'RodriguezCarlos@gmail.com',
                clave: 'Carlos057688',
                direccion: 'Rivadavia 9999',
                telefono:"1234567891",
                activo: false,
                idRol: 2
            },
            {
                nombre: `Damian`,
                apellido: `Pasos`,
                fechaNacimiento: '1985-04-27',
                dni: 42123325,
                email: 'PasosDamian@gmail.com',
                clave: 'Pasos27Damian',
                direccion: '"24 de Noviembre 145"',
                telefono:"1234567891",
                activo: false,
                idRol: 3
            },
            {
                nombre: `Matias`,
                apellido: `Franco`,
                fechaNacimiento: '2003-06-30',
                dni: 43423886,
                email: 'FrancoMatias@gmail.com',
                clave: 'FrancoMatias12345',
                direccion: 'Velez 1235',
                telefono:"1234567891",
                activo: true,
                idRol: 3
            },
            {
                nombre: `Mumbuto`,
                apellido: `Uwimana`,
                fechaNacimiento: '1970-12-25',
                dni: 32900533,
                email: 'UwimanaMumbuto@gmail.com',
                clave: '1970Mumbuto',
                direccion: 'Congo 55555',
                telefono:"1234567891",
                activo: true,
                idRol: 2
            },
            {
                nombre: `Pedro`,
                apellido: `Reyes`,
                fechaNacimiento: '1989-11-15',
                dni: 42994523,
                email: 'ReyesPedro@yopmail.com',
                clave: 'ReyesReyes225',
                direccion: 'Casas 4123',
                telefono:"1234567891",
                activo: true,
                idRol: 3
            },

        ]);
    } catch (error) {
        console.log(error.message);
    }
};

export default seedUsuario;