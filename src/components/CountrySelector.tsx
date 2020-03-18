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
      <div className="select">
        <select value={selectedCountry} onChange={handleChange}>
          {Object.entries(payload.countries).map(([country, code]: any) => {
            return (
              <option key={country} value={payload.iso3[code]}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
// Oops... No Data Provided Yet!
// const Select = styled.select`
//   display: inline-block;
//   max-width: 100%;
//   position: relative;
//   vertical-align: top;
//   /*
//   margin-bottom: 10px;
//   border-color: #3298dc;
//   cursor: pointer;
//   display: block;
//   font-size: 1em;
//   max-width: 100%;
//   outline: 0; */
//   :not([multiple]) {
//     padding-right: 2.5em;
//   }
//   :not(:hover)::after {
//     border-color: #3298dc;
//     border-top-color: rgb(50, 152, 220);
//     border-right-color: rgb(50, 152, 220);
//     border-bottom-color: rgb(50, 152, 220);
//     border-left-color: rgb(50, 152, 220);
//   }
//   :not(.is-multiple):not(.is-loading)::after {
//     border-color: #3273dc;
//     right: 1.125em;
//     z-index: 4;
//   }
//   :not(.is-multiple):not(.is-loading)::after {
//     border: 3px solid transparent;
//     border-radius: 2px;
//     border-right: 0;
//     border-top: 0;
//     content: ' ';
//     display: block;
//     height: 0.625em;
//     margin-top: -0.4375em;
//     pointer-events: none;
//     position: absolute;
//     top: 50%;
//     transform: rotate(-45deg);
//     transform-origin: center;
//     width: 0.625em;
//   }
// `;

export default withCovid()(CountrySelector);
