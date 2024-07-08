import styles from './packProcess.module.scss';

type Process = {
  no: number;
  title: string;
  steps: Array<string>;
};

type PackProcessProps = {
  packProcess: Process;
};
const PackProcess = (propsPackProcess: PackProcessProps) => {
  const { packProcess } = propsPackProcess;

  return (
    <div className={`${styles?.PackProcess} `}>
      <p className={styles?.Title}>
        {packProcess?.no}. {packProcess?.title} PACK
      </p>
      {packProcess?.steps?.map((step, index) => (
        <p className={styles?.Step} key={index}>
          {step}
        </p>
      ))}
    </div>
  );
};

export default PackProcess;
