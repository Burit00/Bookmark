import { useState } from 'react';
import { Icon } from '@/components/Icon';
import errorIcon from '@/assets/icon-error.svg';
import styles from './EmailInput.module.scss';
import { clsx } from 'clsx';

type EmailInputProps = {
  className?: string;
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const EmailInput = ({ className }: EmailInputProps) => {
  const [emailValue, setEmailValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = EMAIL_REGEX.test(emailValue);

  return (
    <div
      className={clsx(
        styles['email-input'],
        {
          [styles['email-input--error']]: isTouched && !isValid,
        },
        className,
      )}
    >
      <label htmlFor="email" className={styles['email-input__wrapper']}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          onBlur={() => setIsTouched(true)}
          className={styles['email-input__input']}
        />
        <Icon src={errorIcon} alt="" className={styles['email-input__warning-icon']} />
      </label>
      <i className={styles['email-input__alert']}>Whoops, make sure it's an email</i>
    </div>
  );
};
