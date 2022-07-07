import React, {
  InputHTMLAttributes,
  FunctionComponent,
  useEffect,
} from 'react';
import register from '@terenceodonoghue/web-components';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextField: FunctionComponent<TextFieldProps> = ({
  label,
  style,
  ...props
}) => {
  useEffect(() => {
    import('@terenceodonoghue/web-components/velocity').then(
      ({ TextField: Component }) => register('wc-text-field', Component),
    );
  }, []);

  return (
    <wc-text-field style={style} label={label}>
      <input slot="input" {...props} />
    </wc-text-field>
  );
};

export default TextField;
