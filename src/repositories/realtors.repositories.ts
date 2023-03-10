import { realtors } from "@prisma/client";
import prisma from "../database/db";
import { Realtor } from "../protocols/realtors.protocols";

export async function getRealtorByCpfQuery(cpf: string): Promise<realtors> {
    const data = await prisma.realtors.findFirst({
        where: {
            cpf: cpf
        }
    })
    return data
}

export async function createRealtorQuery(realtor: Realtor): Promise<void> {
    await prisma.realtors.create({
        data: realtor
    })
}

export async function getAllRealtorsQuery(): Promise<realtors[]> {
    const realtors = await prisma.realtors.findMany()
    return realtors
}

export async function getRealtorByIdQuery(id: number): Promise<realtors> {
    const realtor = await prisma.realtors.findFirst({
        where: {
            id
        }
    })
    return realtor
}

export async function updateRealtorQuery(realtor: Realtor, id: number): Promise<void> {
    await prisma.realtors.update({
        where: { id },
        data: realtor
    })
}

export async function deleteRealtorQuery(id: number): Promise<void> {
    await prisma.realtors.delete({
        where: { id }
    })
}