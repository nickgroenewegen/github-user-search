import Container from '@DS/components/layout/container'
import Box from '@DS/components/layout/box'
import Brand from '@app/_components/brand'

import styles from './styles.module.css'

type Props = Readonly<{
  children?: React.ReactNode
}>

const Header = ({ children }: Props) => (
  <header className={styles.header}>
    <Container>
      <Box>
        <Brand />
        {children}
      </Box>
    </Container>
  </header>
)

export default Header
