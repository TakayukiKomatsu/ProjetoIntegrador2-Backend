/*
  Warnings:

  - Changed the type of `temperatura` on the `Sensor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "tempExterna" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "tempSalaAtual" DROP NOT NULL,
ALTER COLUMN "tempSalaAtual" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "tempDesejada" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "temperatura",
ADD COLUMN     "temperatura" DOUBLE PRECISION NOT NULL;
