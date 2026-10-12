import { animated, useSpring } from 'react-spring';
import styles from './PeopleJoinedAnimation.module.scss';

function formatPeopleJoinedAmount(num: number): string {
  const formatedNumber = Math.floor(num).toLocaleString('en-US');
  return `${formatedNumber}${num === 0 ? '' : '+'}  ALREADY JOINED`;
}

export const PeopleJoinedAnimation = () => {
  const { number: peopleJoinedAmount } = useSpring({
    from: { number: 35000 },
    to: { number: 0 },
    config: {
      duration: 20000,
      mass: 1,
    },
  });

  return (
    <animated.div className={styles['people-joined-animation']}>
      {peopleJoinedAmount.to(formatPeopleJoinedAmount)}
    </animated.div>
  );
};
