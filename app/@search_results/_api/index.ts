type Response = {
  total_count: number
  items: User[]
}

type User = {
  id: string
  login: string
  avatar_url: string
}

export const searchUsers = async (q: string): Promise<Response> => {
  const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(q)}`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}
