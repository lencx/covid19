/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React from 'react';
import withCovid from '~/hooks/withCovid';

interface CountrySelectorProps {
  payload: any;
}

function CountrySelector({ payload }: CountrySelectorProps) {
  return (
    <div>
      <h3>Countries</h3>
      <select>
        {Object.entries(payload.countries).map(([country, code]: any) => {
          return (
            <option key={country} value={payload.iso3[code]}>
              {country}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default withCovid()(CountrySelector);
