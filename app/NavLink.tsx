'use client';

import { Link } from '@/components/index';

import styles from './NavLink.module.css';

export function NavLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li className={styles.sidebar__navItem}>
      <Link className={styles.sidebar__link} {...props} />
    </li>
  );
}
