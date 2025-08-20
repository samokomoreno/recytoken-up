import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "Plástico reciclado", category: "Plásticos", description: "Plástico reciclado de alta densidad", price: 50, currency: "USD", latitude: 12.1589, longitude: -86.2914, sellerName: "Centro Racachaca" },
      { name: "Vidrio", category: "Vidrios", description: "Vidrio verde triturado", price: 30, currency: "USD", latitude: 12.1640, longitude: -86.2967, sellerName: "Recicladora Acahualinca" },
      { name: "Aluminio", category: "Metales", description: "Aluminio prensado listo para fundición", price: 80, currency: "USD", latitude: 12.1238, longitude: -86.2562, sellerName: "Recicladora La Subasta" },
      { name: "Cartón", category: "Cartón", description: "Cartón prensado y clasificado", price: 25, currency: "USD", latitude: 12.1039, longitude: -86.2700, sellerName: "Recicladora Nejapa" },
      { name: "Chatarra metálica", category: "Metales", description: "Hierro y acero recuperado", price: 100, currency: "USD", latitude: 12.1428, longitude: -86.3007, sellerName: "Recicladora Villa Guadalupe" }
    ]
  });
}

main()
  .then(() => console.log("Seed ejecutado con éxito ✅"))
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });