import styles from './styles.module.css'

// Todo: Fix as prop typing.
// Reference resource => https://www.christianvm.dev/blog/react-as-prop
export type CardProps = {
  as?: any
  children: React.ReactNode
}

const Card = ({ as = 'div', children }: CardProps) => {
  const Component = as

  return <Component className={styles.card}>{children}</Component>
}

export default Card
