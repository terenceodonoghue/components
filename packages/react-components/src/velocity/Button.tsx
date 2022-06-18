import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  useEffect,
} from 'react';
import register from '@terenceodonoghue/web-components';
import { Button as WcButton } from '@terenceodonoghue/web-components/velocity';

const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  useEffect(() => {
    register('wc-button', WcButton);
  }, []);

  return (
    <wc-button>
      <button slot="button" type="button" {...props} />
    </wc-button>
  );
};

export default Button;
