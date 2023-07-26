import MainTemplate from '@/components/templates/MainTemplate';
import Head from 'next/head';
import React from 'react';

export default function index() {
  return (
    <>
      <Head>
        <title>My Litle Project - LOR</title>
      </Head>
      <MainTemplate></MainTemplate>
    </>
  );
}
