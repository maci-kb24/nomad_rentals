import { Request, Response } from 'express';
import * as listingService from '../services/lisitngService.js';

// create a new listing
export const createListing = async (req: Request, res: Response) => {

  try {
        const ownerId = req.user?.id
     if (!ownerId) {
      return res.status(401).json({ message: "Unauthorized: Missing user ID" });
    }
    const { title, description, price, location } = req.body;

    if (!title || !description || !price || !location) {

      return res
        .status(400)
        .json({ message: "Missing required fields: title, description, price, location" });
    }

    const listing = await listingService.createListing(
      ownerId,
      {
          title, description, price,
          location: ''
      },
    );

    res.status(201).json({ message: "Listing created successfully", listing });
  } catch (error) {
    res.status(500).json({ message: "Unable to create listing" });
  }
};

// Get all listings
export const getAllListings = async (req: Request, res: Response) => {

  try {
    const listings = await listingService.getAllListings();

    res.status(200).json({ message: "Listings retrieved successfully", listings });
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve listings" });
  }
};

// Get listing by ID
export const getListingById = async (req: Request, res: Response) => {
  try {
    const listing = await listingService.getListingById(req.params.id)
    res.json({ listing })
  } catch (error: any) {
    if (error.message === 'Listing not found') {
      return res.status(404).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}

// Update listing by ID
export const updateListing = async (req: Request, res: Response) => {
  try {
    const ownerId = req.user?.id
    if (!ownerId) {
      return res.status(401).json({ message: "Unauthorized: Missing user ID" });
    }
    const listing = await listingService.updateListing(req.params.id, ownerId, req.body)
    res.json({ listing })
  } catch (error: any) {
    if (error.message === 'Listing not found') {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === 'Forbidden') {
      return res.status(403).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}

// Delete listing by ID
export const deleteListing = async (req: Request, res: Response) => {
  try {
    const ownerId = req.user?.id
    if (!ownerId) {
      return res.status(401).json({ message: "Unauthorized: Missing user ID" });
    }
    const result = await listingService.deleteListing(req.params.id, ownerId)
    res.json(result)
  } catch (error: any) {
    if (error.message === 'Listing not found') {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === 'Forbidden') {
      return res.status(403).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}

// Get listings by owner ID
export const getMyListings = async (req: Request, res: Response) => {
  try {
    const ownerId = req.user?.id
    if (!ownerId) {
      return res.status(401).json({ message: "Unauthorized: Missing user ID" });
    }
    const listings = await listingService.getListingsByOwnerId(ownerId)
    res.json({ listings })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}