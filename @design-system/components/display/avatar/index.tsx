import styles from './styles.module.css'

export type AvatarProps = {
  children: React.ReactNode
}

const Avatar = ({ children }: AvatarProps) => {
  return <div className={styles.avatar}>{children}</div>
}

export default Avatar
