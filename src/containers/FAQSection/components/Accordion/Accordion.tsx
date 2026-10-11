import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import styles from './Accordion.module.scss';

export type AccordionData = {
  label: string;
  content: string;
};

export type AccordionItemProps = {} & AccordionData;

const AccordionItem = ({ label, content }: AccordionItemProps) => {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles['accordion-item']}>
      <button
        type="button"
        className={styles['accordion-item__header']}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles['accordion-item__label']}>{label}</span>
        <svg
          className={clsx(styles['accordion-item__arrow'], {
            [styles['accordion-item__arrow--open']]: isOpen,
          })}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
        >
          <path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8" />
        </svg>
      </button>
      <div
        className={styles['accordion-item__content']}
        style={{
          height: `${contentRef.current && isOpen ? contentRef.current.clientHeight : 0}px`,
        }}
      >
        <p ref={contentRef}>{content}</p>
      </div>
    </div>
  );
};

type AccordionProps = {
  items: AccordionData[];
};

export const Accordion = ({ items }: AccordionProps) => {
  return (
    <div>
      {items.map((item) => (
        <AccordionItem key={item.label} {...item} />
      ))}
    </div>
  );
};
