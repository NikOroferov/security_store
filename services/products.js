import { prisma } from "@/lib/prisma";

export function getProductById(id) {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
}

export function getAllProducts() {
  return prisma.product.findMany();
}
