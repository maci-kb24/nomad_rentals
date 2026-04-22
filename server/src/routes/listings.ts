import { Router } from 'express';
import  prisma  from '../lib/prisma.js';

const router = Router();

// Get all listings
router.get('/', async (req, res) => {
  try {
    const listings = await prisma.listing.findMany({
      include: {
        owner: true,
      },
    });
    res.json(listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Get a single listing by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await prisma.listing.findUnique({
      where: { id },
      include: {
        owner: true,
      },
    });
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    res.json(listing);
  } catch (error) {
    console.error('Error fetching listing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Create a new listing
router.post('/', async (req, res) => {
  const { title, description, price, location, ownerId } = req.body;
  try {
    const newListing = await prisma.listing.create({
      data: {
        title,
        description,
        price,
        location,
        ownerId,
      },
    });
    res.status(201).json(newListing);
  } catch (error) {
    console.error('Error creating listing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;