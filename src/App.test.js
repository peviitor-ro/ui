 import { render, screen } from '@testing-library/react';
 import Logo from './src/components/logo/Logo';

 test('renders learn react link', () => {
   render(<Logo />);
   const logoText = screen.getByText('pe viitor');
   expect(logoText).toBeInTheDocument();
 });
