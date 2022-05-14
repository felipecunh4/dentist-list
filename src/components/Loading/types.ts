import React from 'react';

export interface ILoadingProps {
  loading: boolean;
  children: React.ReactChild | React.ReactChild[];
  className?: string;
}
