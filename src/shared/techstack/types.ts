import { JSX } from 'react';

export type Status = 'proficient' | 'learning';

export type Stack = {
  icon: JSX.Element;
  name: string;
  status: Status;
};
