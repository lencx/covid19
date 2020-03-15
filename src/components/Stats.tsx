/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React from 'react';
import withCovid from '~/hooks/withCovid';

function Stats(props: any) {
  return (
    <div>
      <pre>{JSON.stringify(props.payload, null, 2)}</pre>
    </div>
  );
}

export default withCovid()(Stats);
