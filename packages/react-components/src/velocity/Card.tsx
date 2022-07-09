import React, {
  FunctionComponent,
  useEffect,
  ReactNode,
  CSSProperties,
} from 'react';
import register from '@terenceodonoghue/web-components';

export interface CardProps {
  children?: ReactNode;
  heading?: string;
  style?: CSSProperties;
}

const Card: FunctionComponent<CardProps> = ({ children, heading, style }) => {
  useEffect(() => {
    import('@terenceodonoghue/web-components/velocity').then(
      ({ Card: Component }) => register('wc-card', Component),
    );
  }, []);

  return (
    <wc-card style={style} heading={heading}>
      <div slot="content">{children}</div>
    </wc-card>
  );
};

export default Card;
