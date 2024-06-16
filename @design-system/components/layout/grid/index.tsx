import styles from './styles.module.css'

// Todo: Fix as prop typing.
// Reference resource => https://www.christianvm.dev/blog/react-as-prop
export type GridProps = {
  as?: any
  children: React.ReactNode
}

const Grid = ({ as = 'div', children, ...rest }: GridProps) => {
  const Component = as

  return <Component className={styles.grid} {...rest}>{children}</Component>
}

export default Grid
