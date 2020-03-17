/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import withCovid from '~/hooks/withCovid';

interface CountrySelectorProps {
  payload: any;
  defaultValue?: string;
  onChange?: (country: string) => void;
}

function CountrySelector({
  defaultValue,
  payload,
  onChange,
}: CountrySelectorProps) {
  const [selectedCountry, setSelectedCountry] = useState(defaultValue);
  const handleChange = (e: any) => {
    const val = e.target.value;
    setSelectedCountry(val);
    onChange && onChange(val);
  };
  return (
    <div>
      <h3>Countries</h3>
      {/* <pre>{JSON.stringify(payload.countries, null, 2)}</pre> */}
      <Select value={selectedCountry} onChange={handleChange}>
        {Object.entries(payload.countries).map(([country, code]: any) => {
          return (
            <option key={country} value={payload.iso3[code]}>
              {country}
            </option>
          );
        })}
      </Select>
    </div>
  );
}

const Select = styled.select`
  margin-bottom: 10px;
`;

export default withCovid()(CountrySelector);
