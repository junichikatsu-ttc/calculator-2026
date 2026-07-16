import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App 合計表示のテスト', () => {
  test('2つの数値を入力して=を押すと合計が表示される', () => {
    render(<App />);

    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('合計: 5')).toBeInTheDocument();
  });
});
