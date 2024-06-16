import type { Metadata } from 'next'
import classNames from 'classnames'
import Image from 'next/image'

import { searchUsers } from '../_api'
import Avatar from '@DS/components/display/avatar'

// The style imports are a small brainfart. Would love to discuss this.
import DSGridStyles from '@DS/components/layout/grid/styles.module.css'
import DSFlexStyles from '@DS/components/layout/flex/styles.module.css'
import DSCardStyles from '@DS/components/display/card/styles.module.css'
import DSBoxStyles from '@DS/components/layout/box/styles.module.css'

const listItemClassNames = classNames(DSFlexStyles.flex, DSBoxStyles.box, DSCardStyles.card)

type Props = {
  params: Record<'slug', string>
  searchParams: Record<string, string>
}

const Page = async ({ searchParams: { q } }: Props) => {
  if (!q) {
    return null
  }

  const { total_count, items } = await searchUsers(q)

  return (
    <>
      <p>
        Found
        {' '}
        <b>{total_count}</b>
        {' '}
        results for
        {' '}
        <b>{q}</b>
      </p>
      <ul role="list" data-test-id="search-results" className={DSGridStyles.grid}>
        {items.map(({ id, login, avatar_url }) => (
          <li key={id} className={listItemClassNames}>
            <Avatar>
              <Image src={avatar_url} width={100} height={100} alt={`Avatar for ${login}`} />
            </Avatar>
            <div>
              <h2>{login}</h2>
              <span>{id}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Page
