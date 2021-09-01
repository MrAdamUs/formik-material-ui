import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
  FormLabel,
} from '@material-ui/core';
import { useField, useFormikContext } from 'formik';
const CheckboxWrapper = ({ name, label, legend, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [filed, meta] = useField(name);

  const handleChange = (e) => {
    const { checked } = e.target;
    setFieldValue(name, checked);
  };
  const configCheckBox = {
    ...filed,
    onChange: handleChange,
  };
  const configFormControl = {};

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }
  return (
    <FormControl>
      <FormLabel components='legend'>{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckBox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
