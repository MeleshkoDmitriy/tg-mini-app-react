import { SickForm } from '../../components/Forms/SickForm/SickForm'
import styles from './SickPage.module.css'

export const SickPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Заболел</h1>
      <SickForm />
    </div>
  )
}
