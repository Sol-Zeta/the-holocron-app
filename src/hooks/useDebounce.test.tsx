import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import useDebounce from './useDebounce';

const DebounceTestComponent = ({
  value,
  delay,
}: {
  value: string;
  delay: number;
}) => {
  const debouncedValue = useDebounce(value, delay);
  return <div data-testid="debounced-value">{debouncedValue}</div>;
};

describe('useDebounce hook', () => {
  jest.useFakeTimers();

  it('should update the value after the delay', () => {
    const view = render(<DebounceTestComponent value="initial" delay={500} />);
    expect(screen.getByTestId('debounced-value')).toHaveTextContent('initial');

    view.rerender(<DebounceTestComponent value="updated" delay={1000} />);
    expect(screen.getByTestId('debounced-value')).toHaveTextContent('initial');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByTestId('debounced-value')).toHaveTextContent('updated');
  });
});
