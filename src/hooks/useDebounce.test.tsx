import React, { act } from 'react';
import { render } from '@testing-library/react';
import useDebounce from './useDebounce';

function DebounceTestComponent({
  value,
  delay,
}: {
  value: string;
  delay: number;
}) {
  const debouncedValue = useDebounce(value, delay);
  return <div data-testid="debounced-value">{debouncedValue}</div>;
}

describe('useDebounce hook', () => {
  jest.useFakeTimers();

  it('should update the value after the delay', () => {
    const { getByTestId, rerender } = render(
      <DebounceTestComponent value="initial" delay={500} />
    );
    expect(getByTestId('debounced-value').textContent).toBe('initial');

    rerender(<DebounceTestComponent value="updated" delay={1000} />);
    expect(getByTestId('debounced-value').textContent).toBe('initial');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getByTestId('debounced-value').textContent).toBe('updated');
  });
});
