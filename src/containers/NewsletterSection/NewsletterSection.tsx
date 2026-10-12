import styles from './NewsletterSection.module.scss';
import { PeopleJoinedAnimation } from '@/containers/NewsletterSection/components/PeopleJoinedAnimation';
import { Button } from '@/components/Button';
import { EmailInput } from '@/containers/NewsletterSection/components/EmailInput/EmailInput';

export const NewsletterSection = () => {
  return (
    <section className={styles['newsletter']}>
      <div className={styles['newsletter__wrapper']}>
        <PeopleJoinedAnimation />
        <h2>Stay up-to-date with what we're doing</h2>
        <form className={styles['newsletter__form']}>
          <EmailInput className={styles['newsletter__input']} />
          <Button type="submit" variant="danger">
            Contact Us
          </Button>
        </form>
      </div>
    </section>
  );
};
