import styles from "./style.module.scss";

const LoadingPage = () => {
  return (
    <div className={styles.spinWrapper}>
      <div className={styles.spinner}></div>
      <div></div>
    </div>
  );
};

export default LoadingPage;
