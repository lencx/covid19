/**
 * @author: lencx
 * @create_at: Mar 17, 2020
 */

import dayjs from 'dayjs';

export const formatDate = (time: Date) =>
  dayjs(time).format('YYYY-MM-DD HH:mm:ss');
