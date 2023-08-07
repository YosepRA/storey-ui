import React from 'react';
import { Formik, Field, FieldProps } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';

import type { MainAppBarSearchValues } from 'types/main-app-bar.d.ts';

const MainAppBarSearch = function MainAppBarSearchComponent() {
  const handleFormSubmit = (values: MainAppBarSearchValues) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleFormSubmit}>
      {({ handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <Field type="text" name="search">
            {({ field }: FieldProps) => (
              <InputBase
                {...field}
                size="small"
                placeholder="Search..."
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  px: 1.5,
                  py: 1,
                  '.MuiInputBase-input': {
                    p: 0,
                  },
                }}
              />
            )}
          </Field>
        </Box>
      )}
    </Formik>
  );
};

export default MainAppBarSearch;
