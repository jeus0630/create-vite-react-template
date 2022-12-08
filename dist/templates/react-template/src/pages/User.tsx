import { useEffect, useState } from 'react';
import { useGetUser } from '@/hooks/useGetUsers';
import userState from '@/store/user';
import { useSetRecoilState } from 'recoil';

export default function User() {
  const { isLoading, isError, error, data } = useGetUser(1);
  const [warning, setWarning] = useState<string>('');
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    if (data != null) {
      setUser(data);
    }

    if (isError) {
      error?.message === '404' && setWarning('404: Cannot request');
    }
  }, [isError, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <p>{warning !== '' && warning}</p>
      <p>{data?.name}</p>
    </div>
  );
}
