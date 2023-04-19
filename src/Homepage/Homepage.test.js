import { render, screen } from '@testing-library/react';
import { Homepage } from './Homepage';

describe('Homepage', () => {
  it('renders 8 posts', async () => {
    render(<Homepage />);
    const posts = await screen.findAllByTestId('post');
    expect(posts).toHaveLength(8);
  });

  it('displays Watermark', async () => {
    render(<Homepage />);
    const watermark = await screen.findByText('© WYSPR 2022');
    expect(watermark).toBeInTheDocument();
  });
});
