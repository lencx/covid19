/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React from 'react';

interface CountrySelectorProps {
  dataSource: any;
}

export default function CountrySelector({ dataSource }: CountrySelectorProps) {
  return (
    <div>
      <select>
        {Object.entries(dataSource.countries).map(([country, code]: any) => {
          console.log(`[19] CountrySelector.tsx: `, code);
          return (
            <option key={country} value={dataSource.iso3[code]}>
              {country}
            </option>
          );
        })}
      </select>
    </div>
  );
}
