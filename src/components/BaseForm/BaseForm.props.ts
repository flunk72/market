import { ReactNode } from 'react';

export interface BaseFormProps {
  children: ReactNode;
  onSubmit: () => void;
}
