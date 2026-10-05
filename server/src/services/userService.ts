import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const syncUserFromAuth = async (data:{
    id: string;
    email: string;
    name: string;
}) => {
      console.log('📝 Service: syncing user to database:', data.email)

      const user =await prisma.user.upsert({
        where: { id: data.id },
        update: { 
             email: data.email,
             name: data.name },
        create: { id: data.id, email: data.email, name: data.name },
      });

     
      console.log('✅ Service: user synced successfully:', user.id)
      return user
}