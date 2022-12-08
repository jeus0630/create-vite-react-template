import { screen, render } from '../utils/TestUtils';
import User from './User';

describe('<User></User>', () => {
  it('Should render correct text', async () => {
    render(<User></User>);
    const name = await screen.findByText('Leanne Graham');
    expect(name).toBeInTheDocument();
  });
});
