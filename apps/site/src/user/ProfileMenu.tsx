import { USER_ROLE_LABELS, type UserView } from '@hafifa/shared';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

import { TrackSelector } from '@site/src/tracks/TrackSelector';

import { useCurrentUser } from './CurrentUserContext';
import styles from './ProfileMenu.module.css';

function getInitials(displayName: string): string {
  return displayName
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}

function ProfileDetails({ user }: { user: UserView }) {
  return (
    <dl className={styles.details}>
      <dt>Role</dt>
      <dd>{USER_ROLE_LABELS[user.role]}</dd>
      {user.team && (
        <>
          <dt>Team</dt>
          <dd>{user.team}</dd>
        </>
      )}
      {user.trainerUsername && (
        <>
          <dt>Trainer</dt>
          <dd>{user.trainerUsername}</dd>
        </>
      )}
    </dl>
  );
}

/** Navbar item: the logged-in user, with their details and track in a dropdown. */
export function ProfileMenu() {
  const { state, user } = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking anywhere outside it.
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  if (state.status === 'loading') return null;

  const displayName = user?.displayName ?? 'Offline';

  return (
    <div ref={menuRef} className={styles.menu}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={clsx(styles.avatar, !user && styles.avatarOffline)}>
          {user ? getInitials(user.displayName) : '?'}
        </span>
        <span className={styles.name}>{displayName}</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {user ? (
            <>
              <div className={styles.header}>
                <strong>{user.displayName}</strong>
                <span className={styles.username}>{user.username}</span>
              </div>
              <ProfileDetails user={user} />
            </>
          ) : (
            <p className={styles.offline}>
              Can&apos;t reach the server. Your track is saved in this browser only.
            </p>
          )}
          <div className={styles.section}>
            <span className={styles.sectionTitle}>Your track</span>
            <TrackSelector />
          </div>
        </div>
      )}
    </div>
  );
}
