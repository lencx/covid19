/**
 * @author: lencx
 * @create_at: Mar 15, 2020
 */

import React from 'react';
import Layout from '~/layouts';
import Stats from '~/components/Stats';
import CountrySelector from '~/components/CountrySelector';
import api, { COVID19 } from '~/api';

export default function IndexPage() {
  return (
    <Layout>
      <Stats serve={COVID19} />
      <br />
      <CountrySelector serve={api.countries} />
    </Layout>
  );
}
