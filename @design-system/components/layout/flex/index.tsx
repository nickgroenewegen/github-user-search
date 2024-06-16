import styles from './styles.module.css'

// Todo: Fix as prop typing.
// Reference resource => https://www.christianvm.dev/blog/react-as-prop
export type FlexProps = {
  as?: any
  children: React.ReactNode
}

const Flex = ({ as = 'div', children, ...rest }: FlexProps) => {
  const Component = as

  return <Component className={styles.flex} {...rest}>{children}</Component>
}

export default Flex
