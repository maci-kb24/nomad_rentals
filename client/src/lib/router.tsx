import { createRouter } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";
import type { useAuth } from "@/hooks/useAuth";

export interface RouterContext {
  auth: ReturnType<typeof useAuth>;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const router = createRouter({ routeTree, context: undefined! as unknown as RouterContext });