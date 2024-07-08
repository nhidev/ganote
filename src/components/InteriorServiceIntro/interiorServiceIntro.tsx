import styles from './interiorServiceIntro.module.scss';
import OfficeInterior from './OfficeInterior';
import OfficeManagement from './OfficeManagement';

export default function InteriorServiceIntro() {
  return (
    <div className={styles.operationServiceContainer}>
      <OfficeInterior />
      <OfficeManagement />
    </div>
  );
}
