import { buyers } from "@prisma/client";
import prisma from "../database/db.js";
import { Buyer } from "../protocols/buyers.protocols.js";

export async function getBuyerByCpfQuery(cpf: string): Promise<buyers> {
    const buyer = await prisma.buyers.findFirst({
        where: {
            cpf: cpf
        }
    })
    return buyer
}

export async function createBuyerQuery(buyer: Buyer): Promise<void> {
    await prisma.buyers.create({
        data: buyer
    })
}

export async function getAllBuyersQuery(): Promise<buyers[]> {
    const buyers = await prisma.buyers.findMany()
    return buyers
}

export async function getBuyerByIdQuery(id: number): Promise<buyers> {
    const buyer = await prisma.buyers.findFirst({
        where: {
            id
        }
    })
    return buyer
}