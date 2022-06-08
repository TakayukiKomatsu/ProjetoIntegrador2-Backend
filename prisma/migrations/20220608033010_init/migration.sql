-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "diaEvent" TIMESTAMP(3) NOT NULL,
    "horaInicio" VARCHAR(45) NOT NULL,
    "horaTermino" VARCHAR(45) NOT NULL,
    "qtdePessoas" INTEGER NOT NULL,
    "tempExterna" INTEGER NOT NULL,
    "tempSalaAtual" INTEGER NOT NULL,
    "tempDesejada" INTEGER NOT NULL,
    "horaAcionamentoArCondicionado" VARCHAR(45) NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(45) NOT NULL,
    "pais" VARCHAR(45) NOT NULL,
    "estado" VARCHAR(45) NOT NULL,
    "cidade" VARCHAR(45) NOT NULL,
    "salaLocal" VARCHAR(45) NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sensor" (
    "id" SERIAL NOT NULL,
    "tipo" VARCHAR(45) NOT NULL,
    "temperatura" VARCHAR(45) NOT NULL,
    "leitura" TIMESTAMP(3) NOT NULL,
    "interLeitura" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
