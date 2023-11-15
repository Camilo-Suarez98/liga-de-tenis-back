import { Router } from "express";
import { healcheckHandler } from "./healthcheck.controller";

const router = Router()

router.get('/', healcheckHandler)

export default router