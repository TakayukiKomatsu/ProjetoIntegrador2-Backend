/*
  Warnings:

  - Added the required column `topic` to the `SensorData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SensorData" ADD COLUMN     "topic" TEXT NOT NULL;
