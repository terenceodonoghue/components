import React, {
  InputHTMLAttributes,
  FunctionComponent,
  useEffect,
} from 'react';
import register from '@terenceodonoghue/web-components';

const Slider: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  style,
  ...props
}) => {
  useEffect(() => {
    import('@terenceodonoghue/web-components/velocity').then(
      ({ Slider: Component }) => register('wc-slider', Component),
    );
  }, []);

  return (
    <wc-slider class={className} style={style}>
      <input slot="input" type="range" {...props} />
    </wc-slider>
  );
};

export default Slider;
