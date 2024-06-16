'use client'

import Link from 'next/link'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({ error, reset }: Props) => (
  <>
    <p>
      Oops! Something went wrong... You can  try again or return to the
      {' '}
      <Link href="/">Homepage</Link>
    </p>
    <button onClick={reset}>Try again</button>
  </>
)

export default Error
