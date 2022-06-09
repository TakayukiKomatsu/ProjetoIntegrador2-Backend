-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diaEvent" DATETIME NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaTermino" TEXT NOT NULL,
    "qtdePessoas" INTEGER NOT NULL,
    "tempExterna" INTEGER NOT NULL,
    "tempSalaAtual" INTEGER NOT NULL,
    "tempDesejada" INTEGER NOT NULL,
    "horaAcionamentoArCondicionado" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,
    CONSTRAINT "Event_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "salaLocal" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sensor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "temperatura" TEXT NOT NULL,
    "leitura" DATETIME NOT NULL,
    "interLeitura" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    CONSTRAINT "Sensor_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
