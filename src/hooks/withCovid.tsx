/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React from 'react';
import styled from 'styled-components';
import useCovid from '~/hooks/useCovid';

const withCovid = () => (WrappedComponent: React.ComponentType<any>) => (
  props: any
) => {
  const { payload, status } = useCovid(props.serve);
  return (
    <div>
      {status === 'loading' && <LoadingMsg>loading...</LoadingMsg>}
      {status === 'loaded' && (
        <div>
          {/* <pre>{JSON.stringify(payload, null, 2)}</pre> */}
          <WrappedComponent payload={payload} {...props} />
        </div>
      )}
      {/* Error, the backend moved to the dark side. */}
      {status === 'error' && <ErrorMsg>Oops... No Data Provided Yet!</ErrorMsg>}
    </div>
  );
};

export default withCovid;

const ErrorMsg = styled.div`
  background: var(--yellow);
  padding: 10px;
  border-radius: 4px;
  font-weight: bold;
  color: var(--dark);
  margin: 10px 0;
`;

const LoadingMsg = styled.div`
  padding: 10px;
  font-weight: bold;
  color: #fff;
  margin: 10px 0;
  text-align: center;
`;
