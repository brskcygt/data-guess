import React, { useCallback } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import _ from 'lodash';

export const TableSearch = (props) => {
  const handleChange = useCallback(_.debounce((e) => {
    if (props?.gridRef?.current?.api) {
      props.gridRef.current.api.setQuickFilter(e.target.value);
    }
  }, props.debounceDuration), [props?.gridRef]);

  return (
    <TextField
      autoComplete="off"
      onChange={handleChange}
      placeholder={'Search'}
      InputProps={{ endAdornment: <InputAdornment position="end"><Search /></InputAdornment> }}
      sx={{
        borderRadius: '7px',
        backgroundColor: '#F7F9FC',
        border: 'none',
        '.MuiOutlinedInput-root': {
          height: '40px'
        },
        fieldset: {
          display: 'none'
        }
      }}
    />
  );
};