import React from 'react';

type Validator = (value: string) => boolean

interface Props {
    validators: Validator[];
}

const SimpleForm: React.FC<Props> = ({ validators }) => {
  const onSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    validators[1](e.currentTarget.value);
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <label>foo</label>
      <input type="text" name="foo" />
      <label>bar</label>
      <input type="number" name="bar" />
      <button type="submit">submit</button>
    </form>
  );
};

export default SimpleForm;
