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
  data: {
    title?: string;
    description?: string;
    price?: number;
    location?: string;
  },
) => {
  console.log('📝 Service: updating listing in database:', id, data);
  
  return await prisma.listing.update({
    where: { id },
    data,
  });
};