import * as React from 'react';
import { ErrorBoundary } from '@src/components';
type IWithErrorBoundProps = {
  children: any;
};
export const WithErrorBound = (props: IWithErrorBoundProps) => {
  return (
    <>
      {props.children.map((element: any) => {
        if (typeof element === 'object') {
          return <ErrorBoundary>{element}</ErrorBoundary>;
        }
        return element;
      })}
    </>
  );
};
export default WithErrorBound;
