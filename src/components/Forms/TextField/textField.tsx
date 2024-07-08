import Image from 'next/image';

import styles from './textField.module.scss';

interface IInputField {
  labelContent?: string;
  labelIconUrl?: string;
  labelIconAlt?: string;
  name: string;
  type?: 'text' | 'number' | 'mail';
  min?: number;
  max?: number;
  maxlength?: number;
  id: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validation?: boolean;
  errorText?: string;
  className?: string;
  virtualInput?: string;
}

const TextField: React.FC<IInputField> = ({
  labelContent,
  labelIconUrl = '',
  labelIconAlt = '',
  name,
  type = 'text',
  id,
  placeholder,
  value,
  min = 0,
  onChange,
  validation,
  errorText,
  className,
  virtualInput,
  maxlength,
}) => (
  <div className={`${styles?.inputFiled} ${className}`}>
    <label className={styles?.label} htmlFor={name}>
      {labelContent}
    </label>
    <div className={styles?.textFiled}>
      {type === 'number' ? (
        <input
          onChange={onChange}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          min={min}
          maxLength={maxlength}
        />
      ) : (
        <input
          onChange={onChange}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          maxLength={maxlength}
        />
      )}

      <Image src={labelIconUrl} alt={labelIconAlt} width={20} height={20} />
      {virtualInput && (
        <label htmlFor={name} className={styles?.virtualInput}>
          {virtualInput}
        </label>
      )}
    </div>
    {!validation && <p className={styles?.erorText}>{errorText}</p>}
  </div>
);

export default TextField;
