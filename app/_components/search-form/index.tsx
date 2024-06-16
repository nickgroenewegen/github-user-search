'use client'

import { useFormState } from 'react-dom'
import { handleOnSearchSubmit } from '@app/_actions'
import DSstyles from '@DS/utils/sr-only/styles.module.css'
import styles from './styles.module.css'

const SearchForm = () => {
  const [message, action] = useFormState(handleOnSearchSubmit, null)

  return (
    <form action={action} role="search" data-test-id="search-form" className={styles['search-form']}>
      <label htmlFor="search" className={DSstyles['sr-only']}>Search term</label>
      <input id="search" name="q" type="search" autoComplete="off" placeholder="e.g. john, some@email.com" />
      <button type="submit">Search</button>
      <p aria-live="polite" role="status">
        {message}
      </p>
    </form>
  )
}

export default SearchForm
