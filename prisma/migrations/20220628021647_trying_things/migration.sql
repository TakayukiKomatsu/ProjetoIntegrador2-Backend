-- DropForeignKey
ALTER TABLE "Sensor" DROP CONSTRAINT "Sensor_roomId_fkey";

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
