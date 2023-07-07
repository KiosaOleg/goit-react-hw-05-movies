import React from 'react';
import { Head, PageLink } from './Header.styled';

export default function Header() {
  return (
    <Head>
      <PageLink to="/">Home</PageLink>
      <PageLink to="/movies">Movie</PageLink>
    </Head>
  );
}
