import { setupWorker } from 'msw/browser';
import { dashboardHandler } from "@/mocks/handlers/dashboardHandlers";

export const worker = setupWorker(...dashboardHandler)