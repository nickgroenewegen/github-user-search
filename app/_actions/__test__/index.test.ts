import { redirect } from 'next/navigation'
import { handleOnSearchSubmit } from '../index'

jest.mock('next/navigation')

test('Should correctly call the redirect function', async () => {
  const formData = new FormData()
  formData.append('q', 'Nick')

  await handleOnSearchSubmit(null, formData)

  expect(redirect).toHaveBeenCalledWith('/search?q=Nick')
})

test('Should return a valdation message if the input is incorrect', async () => {
  const formData = new FormData()
  formData.append('q', '')

  const result = await handleOnSearchSubmit(null, formData)

  expect(result).toEqual('Please provide valid input')
})
