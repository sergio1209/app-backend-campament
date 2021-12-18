import { createConnection } from "typeorm";

const ConnectionDB = 'DATABASE_CONNECTION';
export const DatabaseProvider = [

    {
        provide: ConnectionDB,
        useFactory: async () => await createConnection({

            type: 'mariadb',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'camp_db',
            entities: ['**/**/**/*.entity{.js,.ts}'],
            synchronize: true //solo usar en desarrollo y no en produccion
        }),
    },
];

