import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  useEffect,
} from 'react';
import register from '@terenceodonoghue/web-components';

const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  useEffect(() => {
    import('@terenceodonoghue/web-components/velocity').then(
      ({ Button: Component }) => register('wc-button', Component),
    );
  }, []);

  return (
    <wc-button>
      <button slot="button" type="button" {...props} />
    </wc-button>
  );
};

export default Button;
