import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices';
import { User } from '../../store/types';

interface UserListProps {
  users: User[];
  handleOpen: () => void;
}

export const UserList = ({ users, handleOpen }: UserListProps) => {
  const dispatch = useDispatch();

  const handleCLick = (user: User) => {
    dispatch(setUser(user));
    handleOpen();
  };

  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className='bg-blue-500/30 flex flex-col items-center justify-between w-56 rounded-lg space-y-4 p-4'>
          <div className='space-y-2'>
            <h2 className='text-center'>{user.name}</h2>
            <img
              src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
              alt={user.name}
              className='rounded mx-auto'
            />
            <p>{user.email}</p>
            <img src='' alt='' />
          </div>
          <div>
            <button className='bg-white p-2 rounded-lg' onClick={() => handleCLick(user)}>
              Show details
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
