import * as React from 'react';
import { NavLink } from './NavLink';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/collapsible">Collapsible</NavLink>
      </ul>
    </nav>
  );
}
