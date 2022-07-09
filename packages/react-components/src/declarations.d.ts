import { DetailedHTMLProps, HTMLAttributes } from 'react';

type CustomElement<T = unknown> = T &
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wc-button': CustomElement<{ variant?: string }>;
      'wc-card': CustomElement<{ heading?: string }>;
      'wc-text-field': CustomElement<{ label?: string }>;
    }
  }
}
