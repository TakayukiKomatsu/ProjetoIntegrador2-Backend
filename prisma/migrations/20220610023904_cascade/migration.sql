-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sensor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "temperatura" TEXT NOT NULL,
    "leitura" DATETIME NOT NULL,
    "interLeitura" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    CONSTRAINT "Sensor_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Sensor" ("id", "interLeitura", "leitura", "roomId", "temperatura", "tipo") SELECT "id", "interLeitura", "leitura", "roomId", "temperatura", "tipo" FROM "Sensor";
DROP TABLE "Sensor";
ALTER TABLE "new_Sensor" RENAME TO "Sensor";
CREATE TABLE "new_Event" (
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
    CONSTRAINT "Event_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("diaEvent", "horaAcionamentoArCondicionado", "horaInicio", "horaTermino", "id", "qtdePessoas", "roomId", "tempDesejada", "tempExterna", "tempSalaAtual") SELECT "diaEvent", "horaAcionamentoArCondicionado", "horaInicio", "horaTermino", "id", "qtdePessoas", "roomId", "tempDesejada", "tempExterna", "tempSalaAtual" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
