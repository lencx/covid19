/**
 * @author: lencx
 * @create_at: Mar 15, 2020
 */

import React from 'react';
import Stats from '~/components/Stats';
import { COVID19 } from '~/api';

export default function IndexPage() {
  return (
    <div>
      <Stats serve={COVID19} />
    </div>
  );
}
