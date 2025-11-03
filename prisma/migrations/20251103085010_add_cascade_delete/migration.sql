-- DropForeignKey
ALTER TABLE "public"."Heritage" DROP CONSTRAINT "Heritage_userId_fkey";

-- AddForeignKey
ALTER TABLE "Heritage" ADD CONSTRAINT "Heritage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
