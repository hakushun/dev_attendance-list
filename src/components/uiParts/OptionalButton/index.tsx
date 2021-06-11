import React from 'react';
import styles from './index.module.scss';

type Props = {
  label: string;
  handleClick: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const OptionalButton: React.VFC<Props> = ({ label, handleClick }) => {
  return (
    <button type="button" className={styles.root} onClick={handleClick}>
      {label}
    </button>
  );
};
