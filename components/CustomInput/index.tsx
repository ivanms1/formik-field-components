import { InputGroup, FormGroup } from '@blueprintjs/core';

function CustomInput({
  field,
  form: { touched, errors },
  type = 'text',
  label,
  labelInfo,
  ...props
}) {
  return (
    <FormGroup
      label={label}
      helperText={
        touched[field.name] && errors[field.name] && errors[field.name]
      }
      intent={touched[field.name] && errors[field.name] ? 'danger' : 'none'}
      labelInfo={labelInfo}
    >
      <InputGroup
        intent={touched[field.name] && errors[field.name] ? 'danger' : 'none'}
        type={type}
        {...field}
        {...props}
      />
    </FormGroup>
  );
}

export default CustomInput;
