import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all listings
export const getAllListings = async () => {
  console.log('📝 Service: fetching all listings from database');
  return  await prisma.listing.findMany({
    include: {
      owner: {
        select: {
          id: true,
          email: true,
        },
      },
    },
  });
};

// Get a single listing by ID
export const getListingById = async (id: string) => {
  console.log('📝 Service: fetching listing by id from database:', id);
  const listing =  await prisma.listing.findUnique({
    where: { id },
    include: {
      owner: {
        select: {
          id: true,
          email: true,
        },
      },
    },
  });
  if (!listing) {
    throw new Error('Listing not found');
  }
  return listing;
};

// Create a new listing
export const createListing = async (
  ownerId: string,
  data: {
    title: string;
    description: string;
    price: number;
    location: string;
  },
) => {
  console.log('📝 Service: creating new listing in database:', data);

  return await prisma.listing.create({
    data: {
      ...data,
        ownerId,
    },
  });
};

// Update an existing listing
export const updateListing = async (
  id: string,
  ownerId: string,
  data: {
    title?: string;
    description?: string;
    price?: number;
    location?: string;
  },
) => {
  console.log('📝 Service: updating listing in database:', id, data);
  const existing = await prisma.listing.findUnique({ where: { id } })
  if (!existing) throw new Error('Listing not found')
  if (existing.ownerId !== ownerId) throw new Error('Forbidden')

  return await prisma.listing.update({
    where: { id },
    data,
  });
};

// Delete a listing
export const deleteListing = async (id: string, ownerId: string) => {
  console.log('📝 Service: deleting listing from database:', id);
  const existing = await prisma.listing.findUnique({ where: { id } })
  if (!existing) throw new Error('Listing not found')
  if (existing.ownerId !== ownerId) throw new Error('Forbidden')

  await prisma.listing.delete({
    where: { id },
  });
  return { message: 'Listing deleted successfully' };
};

// Get listings by owner ID
export const getListingsByOwnerId = async (ownerId: string) => {
  console.log('📝 Service: fetching listings by owner id from database:', ownerId);
  return await prisma.listing.findMany({
    where: { ownerId },
  });
};