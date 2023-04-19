import { render, screen } from '@testing-library/react';
import { Post } from './Post';

describe('Post', () => {
it('renders Post component with props', () => {
  const name = 'Joe Bloggs';
  const email = 'Joe@bloggs.com';
  render(<Post name={name} email={email} />);

  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByText('APPROVED')).toBeInTheDocument();
  expect(screen.getByText('F')).toBeInTheDocument();
  expect(screen.getByText('story')).toBeInTheDocument();
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(email)).toBeInTheDocument();
  expect(screen.getByText(/^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)).toBeInTheDocument(); // Email is a valid format
});

it('checks emails are in correct format', () => {
  const email = 'Joe@bloggs.com';
  render(<Post email={email} />);

  expect(screen.getByText(/^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)).toBeInTheDocument(); // Email is a valid format
});

it('truncates very long names', () => {
  const name = 'This is a very long name that should truncate in the UI';
  render(<Post name={name} />);

  expect(screen.getByText(/^This is a very long name that should truncate in the.../)).toBeInTheDocument();
});

})