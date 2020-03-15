/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React from 'react';
import useCovid from '~/hooks/useCovid';

const withCovid = () => (WrappedComponent: React.ComponentType<any>) => (
  props: any
) => {
  const { payload, status } = useCovid(props.serve);
  return (
    <div>
      {status === 'loading' && <div>loading...</div>}
      {status === 'loaded' && (
        <div>
          {/* <pre>{JSON.stringify(payload, null, 2)}</pre> */}
          <WrappedComponent payload={payload} {...props} />
        </div>
      )}
      {status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};

export default withCovid;
