import classNames from 'classnames'
import styles from './styles.module.css'

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

const Container = ({ children, className, ...rest }: ContainerProps) => (
  <div className={classNames(styles.container, className)} {...rest}>{children}</div>
)

export default Container
