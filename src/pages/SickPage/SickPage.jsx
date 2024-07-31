import styles from './SickPage.module.css'

export const SickPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Заболел</h1>
      <SickPage />
    </div>
  )
}
