import { Button } from '@/components/Button';
import { Accordion } from './components/Accordion';
import { FAQS } from './faq.data';
import styles from './FAQSection.module.scss';

export const FAQSection = () => {
  return (
    <section className={styles['faq']}>
      <div className={styles['faq__wrapper']}>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like answered please feel
          free to email us.
        </p>
      </div>
      <div className={styles['faq__content']}>
        <Accordion
          items={FAQS.map(({ question, answer }) => ({
            label: question,
            content: answer,
          }))}
        />
      </div>
      <Button>More info</Button>
    </section>
  );
};
