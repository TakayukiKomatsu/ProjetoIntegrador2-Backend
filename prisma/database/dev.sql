SQLite format 3   @     '                                                             ' .O|� ���]
j���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            �2�.�*�tablenew_Eventnew_EventCREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diaEvent" TEXT NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaTermino" TEXT NOT NULL,
    "qtdePessoas" INTEGER NOT NULL,
    "tempExterna" INTEGER NOT NULL,
    "tempSalaAtual" INTEGER NOT NULL,
    "tempDesejada" INTEGER NOT NULL,
    "horaAcionamentoArCondicionado" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,
    CONSTRAINT "Event_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE
)��YtableSensorSensorCREATE TABLE "Sensor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "temperatura" TEXT NOT NULL,
    "leitura" DATETIME NOT NULL,
    "interLeitura" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    CONSTRAINT "Sensor_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE
)�p�CtableRoomRoomCREATE TABLE "Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "salaLocal" TEXT NOT NULL
)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)� �	�tableEventEventCREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diaEvent" TEXT NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaTermino" TEXT NOT NULL,
    "qtdePessoas" INTEGER NOT NULL,
    "tempExterna" INTEGER NOT NULL,
    "tempSalaAtual" INTEGER NOT NULL,
    "tempDesejada" INTEGER NOT NULL,
    "horaAcionamentoArCondicionado" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,
    CONSTRAINT "Event_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE
)�Z11�_table_prisma_migrations_prisma_migrationsCREATE TABLE "_prisma_migrations" (
    "id"                    TEXT PRIMARY KEY NOT NULL,
    "checksum"              TEXT NOT NULL,
    "finished_at"           DATETIME,
    "migration_name"        TEXT NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        DATETIME,
    "started_at"            DATETIME NOT NULL DEFAULT current_timestamp,
    "applied_steps_count"   INTEGER UNSIGNED NOT NULL DEFAULT 0
)CW1 indexsqlite_autoindex__prisma_migrations_1_prisma_migrations          G p�G                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         �
U�?  	7ca3cd6c-f091-452d-bfdd-b8a5244718ea344553b069baf84e8b110ef013666ee9abb053b3bc175bf4fab97ae271255420�oh20220617001252_event_date�og��
U�9  	b4c4f395-8a5a-4203-b57b-14a8306fec891d6af1f4168e9f68bca2f78f7e8ed3e10ab2037bb580765d9746008b52d9e7cc�Kz�>20220610023904_cascade�Kz��
U�3  	cf769a91-5759-4bb7-9afd-7e74b189592f11d458021b8ee11ffb924a4830e32182547ac1a1e84d8be804eb5cf4cf8c9d3e�Ja�x20220609213200_init�Ja�e
   � ���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        (U7ca3cd6c-f091-452d-bfdd-b8a5244718ea(Ub4c4f395-8a5a-4203-b57b-14a8306fec89'U	cf769a91-5759-4bb7-9afd-7e74b189592f      �)))))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        �                                                                                                                                                                                                       	� � ����                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      � new_EventRoom
Sensor   
Even	Event      ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             /EventoBrazilSaoPauloSaoPauloS   4!!Nova SalaBrasilSão PauloSão PauloPaulista        ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ,        #	Temperatura   	      ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      !#	Temperatura50   	12