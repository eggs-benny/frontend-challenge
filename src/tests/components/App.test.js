import { render, screen } from '@testing-library/react';
import { App } from '../../App/App';


describe('App', () => {
it('renders homepage', () => {
  render(<App />);
  const homepageElement = screen.getByTestId('homepage');
  expect(homepageElement).toBeInTheDocument();
});

it('renders details from the homepage (e.g. watermark)', async () => {
  render(<App />);
  const watermark = await screen.findByText('© WYSPR 2022');
  expect(watermark).toBeInTheDocument();
});
})