'use client';

import NextLink from 'next/link';
import clsx from 'clsx';

type Props = React.ComponentPropsWithoutRef<typeof NextLink>;

export function Link({ className, ...props }: Props) {
  return <NextLink className={clsx('link', className)} {...props} />;
}
