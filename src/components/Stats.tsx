/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';
import withCovid from '~/hooks/withCovid';
import { formatDate } from '~/utils/tools';

export interface StatsProps {
  payload: any;
}

export interface StatsItemProps {
  type: string;
  dataSource: {
    value: number;
    detail: string;
  };
  color?: string;
}

export function StatsItem({ color, type, dataSource }: StatsItemProps) {
  return (
    <StatsItemBox color={color}>
      <h3>{type}</h3>
      <em>{dataSource.value}</em>
      <br />
      {/* <Link href="/">detail</Link> */}
    </StatsItemBox>
  );
}

function Stats({ payload }: StatsProps) {
  return (
    <div>
      {/* <pre>{JSON.stringify(payload, null, 2)}</pre> */}
      <StatsIBox>
        <StatsItem
          type="confirmed"
          color="var(--red)"
          dataSource={payload.confirmed}
        />
        <StatsItem
          type="recovered"
          color="var(--theme-primary)"
          dataSource={payload.recovered}
        />
        <StatsItem
          type="deaths"
          color="var(--silver)"
          dataSource={payload.deaths}
        />
      </StatsIBox>
      <TimeBox>
        <span>Last Updated:</span>
        <time>{formatDate(payload.lastUpdate)}</time>
      </TimeBox>
    </div>
  );
}

export default withCovid()(Stats);

const StatsIBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatsItemBox = styled.div`
  flex: 1;
  text-align: center;
  /* box-shadow: inset 0 0 3px ${props => props.color}; */
  background: ${props => props.color};
  color: #fff;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  @media (min-width: 768px) {
    padding: 20px;
    h3 {
      font-size: 14px;
      margin-bottom: 10px;
    }
    em {
      font-size: 24px;
    }
  }
  @media (max-width: 767px) {
    padding: 10px;
    h3 {
      font-size: 12px;
      margin-bottom: 3px;
    }
    em {
      font-size: 14px;
    }
  }
  h3 {
    text-transform: capitalize;
    font-weight: normal;
  }
  em {
    font-style: normal;
    font-weight: bold;
  }
`;

const TimeBox = styled.div`
  font-size: 12px;
  margin: 10px 0 20px;
  span {
    color: var(--warning);
    margin-right: 10px;
  }
  time {
    color: var(--red);
  }
`;
