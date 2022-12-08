import { screen, render } from '../utils/TestUtils';
import NotFound from './NotFound';

describe('<NotFound></NotFound>', () => {
  it('Should render correct text', () => {
    render(<NotFound></NotFound>);
    const text = screen.getByText(/Page Not Found/);
    expect(text).toBeInTheDocument();
  });
});
