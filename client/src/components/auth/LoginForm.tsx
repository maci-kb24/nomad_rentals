"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(5).max(100).email(),
  password: z.string().min(8).max(100),
})
type FormData = z.infer<typeof formSchema>


