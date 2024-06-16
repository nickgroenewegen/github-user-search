import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import classNames from 'classnames'

import Container from '@DS/components/layout/container'
import Header from '@app/_components/header'
import Footer from '@app/_components/footer'

// Given more thought DS tokens could replace these imports.
import '@DS/variables.css'
import '@DS/defaults.css'
// The style imports are a small brainfart. Would love to discuss this.
import DSBoxStyles from '@DS/components/layout/box/styles.module.css'
import DSStackStyles from '@DS/components/layout/stack/styles.module.css'

export const fontFamilyprimary = Open_Sans({
  subsets: ['latin'],
  variable: '--font-family-primary',
  display: 'swap',
})

const containerClassNames = classNames(DSBoxStyles.box, DSStackStyles.stack)

type Props = Readonly<{
  search_results: React.ReactNode
  children: React.ReactNode
}>

const Layout = ({ search_results, children }: Props) => (
  <html lang="en" dir="ltr" className={fontFamilyprimary.variable}>
    <body>
      <Header />
      <main>
        <Container className={containerClassNames}>
          {children}
          {search_results}
        </Container>
      </main>
      <Footer />
    </body>
  </html>
)

export const metadata: Metadata = {
  title: 'Home - GitHub user search',
  description: 'Query the GitHub search API to find users or organizations you&#39;re looking for.',
}

export default Layout
