 import { render, screen } from '@testing-library/react';
 import App from './App';

 test('renders learn react link', () => {
   render(<App />);
   const linkElement = screen.getAllByText(/pe viitor/i);
   expect(linkElement).toBeInTheDocument();
 });
