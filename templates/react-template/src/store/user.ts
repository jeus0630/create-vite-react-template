import { atom } from 'recoil';

interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
}

const userState = atom<UserType>({
  key: 'todos',
  default: {
    id: 0,
    name: '',
    username: '',
    email: '',
  },
});

export default userState;
