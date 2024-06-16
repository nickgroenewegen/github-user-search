import { z } from 'zod'

export const searchFormSchema = z.string().min(3)
