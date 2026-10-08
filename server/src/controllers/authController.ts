import { Request, Response } from "express";
import { syncUserFromAuth } from "../services/userService.js";

export const syncUserController = async (req: Request, res: Response) => {
  console.log('--- NEW REQUEST ---')
  console.log('Headers:', req.headers['content-type'])
  console.log('Body:', req.body)
  console.log('id:', req.body?.id)
  console.log('email:', req.body?.email)

  try {
    const { id, email, name } = req.body;
    console.log("2. Extracted:", { id, email, name });

    console.log('3. id:', id)
    console.log('4. email:', email)

    if (!id || !email ) {
      console.log("3. FAILED VALIDATION: missing id or email");

      return res
        .status(400)
        .json({ message: "Missing required fields: id, email, name" });
    }

    console.log("4. Validation passed, calling service...");

    const user = await syncUserFromAuth({ id, email, name });
    console.log("5. Service returned:", user);

    res.status(200).json({ message: "User synced successfully", user });
  } catch (error) {
    console.log('6. CAUGHT ERROR:', error instanceof Error ? error.message : String(error))
    console.log('7. Full error:', error)  // ← see full Prisma error
    res.status(500).json({ message: "Unable to sync user from auth" });
  }
};
