/**
 * @author: lencx
 * @create_at: Mar 15, 2020
 */

import React from 'react';
import Layout from '~/layouts';
import Stats from '~/components/Stats';
import CountrySelector from '~/components/CountrySelector';
import api, { COVID19 } from '~/api';
import useStore from '~/hooks/useStore';

export default function IndexPage() {
  const { state, set } = useStore({
    country: 'CHN',
  });
  return (
    <Layout>
      <h2>Global</h2>
      <Stats serve={COVID19} />
      <br />
      <CountrySelector
        defaultValue={state.country}
        serve={api.countries}
        onChange={(e: any) => set('country', e)}
      />
      <Stats serve={`${api.countries}/${state.country}`} />
    </Layout>
  );
}
