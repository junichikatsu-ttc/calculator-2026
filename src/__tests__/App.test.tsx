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

  test('Cボタンを押すと入力と結果がリセットされる', () => {
    render(<App />);

    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('合計: 5')).toBeInTheDocument();

    fireEvent.click(screen.getByText('C'));

    expect(screen.getByText('合計:')).toBeInTheDocument();
    expect(screen.queryByText('合計: 5')).not.toBeInTheDocument();
  });

  test('リセット後に続けて再入力できる', () => {
    render(<App />);

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('C'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('合計: 5')).toBeInTheDocument();
  });
});
