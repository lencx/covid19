/**
 * @author: lencx
 * @create_at: Mar 15, 2020
 */

import React from 'react';
import useCovid from '~/hooks/useCovid';
import { COVID19 } from '~/api';

export default function IndexPage() {
  const data = useCovid(COVID19);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
