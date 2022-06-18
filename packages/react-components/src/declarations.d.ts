import { DetailedHTMLProps, HTMLAttributes } from 'react';

type CustomElement = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wc-button': CustomElement;
    }
  }
}
