import { useField } from 'formik';
import { FormGroup, InputGroup } from '@blueprintjs/core';

function UseFieldInput({ label, type = 'text', labelInfo, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <FormGroup
      label={label}
      helperText={meta.touched && meta.error && meta.error}
      intent={meta.touched && meta.error ? 'danger' : 'none'}
      labelInfo={labelInfo}
    >
      <InputGroup
        intent={meta.touched && meta.error ? 'danger' : 'none'}
        type={type}
        {...field}
        {...props}
      />
    </FormGroup>
  );
}

export default UseFieldInput;
