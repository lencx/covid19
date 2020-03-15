/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React from 'react';
import withCovid from '~/hooks/withCovid';

interface StatsProps {
  payload: any;
}

function Stats({ payload }: StatsProps) {
  return (
    <div>
      <h3>Stats</h3>
      <pre>{JSON.stringify(payload, null, 2)}</pre>
    </div>
  );
}

export default withCovid()(Stats);
