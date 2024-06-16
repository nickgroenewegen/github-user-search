'use server'

import { redirect } from 'next/navigation'
import { searchFormSchema } from '@app/_schemas'

export const handleOnSearchSubmit = async (_: string | null, formData: FormData) => {
  const q = formData.get('q')
  const validationResult = searchFormSchema.safeParse(q)

  if (validationResult.error) {
    return 'Please provide valid input'
  }

  redirect(`/search?q=${q}`)
}
