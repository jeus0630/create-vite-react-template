import { render, screen } from '@/utils/TestUtils';
import Layout from './Layout';

describe('<Layout></Layout>', () => {
  it('Should render default layout', () => {
    render(<Layout></Layout>);

    const header = screen.getByRole('banner');
    const main = screen.getByRole('main');
    const footer = screen.getByRole('contentinfo');

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
