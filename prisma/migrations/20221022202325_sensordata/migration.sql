/*
  Warnings:

  - You are about to drop the column `diaEvent` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `horaAcionamentoArCondicionado` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `horaInicio` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `horaTermino` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `qtdePessoas` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `tempDesejada` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `tempExterna` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `tempSalaAtual` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `pais` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `salaLocal` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `interLeitura` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `leitura` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `temperatura` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Sensor` table. All the data in the column will be lost.
  - Added the required column `ACTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountPeople` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desiredTemperature` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sensor" DROP CONSTRAINT "Sensor_roomId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "diaEvent",
DROP COLUMN "horaAcionamentoArCondicionado",
DROP COLUMN "horaInicio",
DROP COLUMN "horaTermino",
DROP COLUMN "qtdePessoas",
DROP COLUMN "tempDesejada",
DROP COLUMN "tempExterna",
DROP COLUMN "tempSalaAtual",
ADD COLUMN     "ACTime" TEXT NOT NULL,
ADD COLUMN     "amountPeople" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "desiredTemperature" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "cidade",
DROP COLUMN "descricao",
DROP COLUMN "estado",
DROP COLUMN "pais",
DROP COLUMN "salaLocal",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "interLeitura",
DROP COLUMN "leitura",
DROP COLUMN "temperatura",
DROP COLUMN "tipo",
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "SensorData" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "sensorId" INTEGER NOT NULL,

    CONSTRAINT "SensorData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SensorData" ADD CONSTRAINT "SensorData_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "Sensor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
