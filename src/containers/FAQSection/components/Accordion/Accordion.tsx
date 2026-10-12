import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import styles from './Accordion.module.scss';
import { Icon } from '@/components/Icon';

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
        <Icon
          name="arrow"
          className={clsx(styles['accordion-item__arrow'], {
            [styles['accordion-item__arrow--open']]: isOpen,
          })}
        />
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
