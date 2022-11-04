import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function ActiveLink({
  route,
  name,
}: {
  route: string;
  name: string;
}) {
  const location = useLocation();

  return (
    <Link
      className={`${location.pathname === route ? 'underline' : ''}`}
      to={route}
    >
      {name}
    </Link>
  );
}
