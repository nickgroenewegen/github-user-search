import styles from './styles.module.css'

export type BoxProps = {
  children: React.ReactNode
}

const Box = ({ children }: BoxProps) => (
  <div className={styles.box}>{children}</div>
)

export default Box
