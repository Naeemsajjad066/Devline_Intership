import prisma from "./db/prismaClient.js";

async function main(){
    const data =await prisma.user.findMany();
    console.log(data)
}

main()