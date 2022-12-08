import { screen, render } from '../utils/TestUtils';
import Home from './Home';

describe('<Home></Home>', () => {
  it('Should render correct text', () => {
    render(<Home></Home>);
    const text = screen.getByText(/Vite React Template !/);
    expect(text).toBeInTheDocument();
  });
});
