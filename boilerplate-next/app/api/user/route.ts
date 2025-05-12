import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Liste tous les utilisateurs
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POST: Ajoute un utilisateur admin
export async function POST(request: Request) {
  const data = await request.json();
  if (!data.email) {
    return NextResponse.json({ error: "Email requis" }, { status: 400 });
  }
  // On ajoute un champ "isAdmin" pour l'exemple
  const user = await prisma.user.create({
    data: {
      email: data.email,
      name: data.name || null,
      isAdmin: data.isAdmin === true,
      // Ajoute ici d'autres champs si besoin
    },
  });
  return NextResponse.json(user, { status: 201 });
}
