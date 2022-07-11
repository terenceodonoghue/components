import React, { FunctionComponent, HTMLAttributes, useEffect } from 'react';
import register from '@terenceodonoghue/web-components';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

const Card: FunctionComponent<CardProps> = ({
  children,
  className,
  heading,
  style,
  ...props
}) => {
  useEffect(() => {
    import('@terenceodonoghue/web-components/velocity').then(
      ({ Card: Component }) => register('wc-card', Component),
    );
  }, []);

  return (
    <wc-card class={className} style={style} heading={heading}>
      <div slot="content" {...props}>
        {children}
      </div>
    </wc-card>
  );
};

export default Card;
