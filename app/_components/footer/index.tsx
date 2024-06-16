import Link from 'next/link'
import Box from '@DS/components/layout/box'
import Container from '@DS/components/layout/container'

const Footer = () => (
  <footer>
    <Container>
      <Box>
        Powered by
        {' '}
        <Link href="https://nextjs.org/">Nextjs</Link>
      </Box>
    </Container>
  </footer>
)

export default Footer
