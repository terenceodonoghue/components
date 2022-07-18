import React, { FunctionComponent, ImgHTMLAttributes, useEffect } from 'react';
import register from '@terenceodonoghue/web-components';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  variant?: 'rounded' | 'square';
}

const Avatar: FunctionComponent<AvatarProps> = ({
  alt,
  className,
  size,
  style,
  variant,
  ...props
}) => {
  useEffect(() => {
    import('@terenceodonoghue/web-components/velocity').then(
      ({ Avatar: Component }) => register('wc-avatar', Component),
    );
  }, []);

  return (
    <wc-avatar class={className} style={style} size={size} variant={variant}>
      <img alt={alt} slot="img" {...props} />
    </wc-avatar>
  );
};

export default Avatar;
