import { LateForm } from '../../components/Forms/LateForm/LateForm'
import styles from './LatePage.module.css'

export const LatePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Опаздываю</h1>
      <LateForm />
    </div>
  )
}
