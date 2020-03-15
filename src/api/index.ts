/**
 * @author: lencx
 * @create_at: Mar 15, 2020
 */

// base api
export const COVID19 = 'https://covid19.mathdro.id/api';

export default {
  confirmed: `${COVID19}/confirmed`,
  recovered: `${COVID19}/recovered`,
  deaths: `${COVID19}/deaths`,
};
