import React, {
  InputHTMLAttributes,
  FunctionComponent,
  useEffect,
} from 'react';

import register from '@terenceodonoghue/web-components';

const Switch: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  style,
  ...props
}) => {
  useEffect(() => {
    import('@terenceodonoghue/web-components/velocity').then(
      ({ Switch: Component }) => register('wc-switch', Component),
    );
  }, []);

  return (
    <wc-switch class={className} style={style}>
      <input slot="input" type="checkbox" {...props} />
    </wc-switch>
  );
};

export default Switch;
