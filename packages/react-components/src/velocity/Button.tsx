import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  useEffect,
} from 'react';
import register from '@terenceodonoghue/web-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  style,
  variant,
  ...props
}) => {
  useEffect(() => {
    import('@terenceodonoghue/web-components/velocity').then(
      ({ Button: Component }) => register('wc-button', Component),
    );
  }, []);

  return (
    <wc-button class={className} style={style} variant={variant}>
      <button slot="button" type="button" {...props} />
    </wc-button>
  );
};

export default Button;
