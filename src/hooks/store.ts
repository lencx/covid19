import { useReducer } from 'react';
import _cloneDeep from 'lodash/cloneDeep';
import _set from 'lodash/set';
import _get from 'lodash/get';

/**
 * Store
 * @author lencx
 * @param {object} - initial value
 * @example
 * const { state, set, get } = Store({ visible: true, form: {name: 'lencx', age: 27 }});
 * set('form.name', 'Tom');
 * set('visible', false);
 * set({
 *   visible: false,
 *   'form.age': 20
 * });
 * get('form.name');
 */
export default function Store(initState = {}) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    ...initState,
  });

  const set = (prefix, data) => {
    let _data = _cloneDeep(state);
    if (typeof prefix === 'string') {
      _set(_data, prefix, data);
    }
    if (typeof prefix === 'object') {
      for (let key in prefix) {
        _set(_data, key, prefix[key]);
      }
    }
    setState(_data);
    return _data;
  };

  const get = prefix => _get(state, prefix);

  return { state, set, get };
}
