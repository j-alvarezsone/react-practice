import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from './components/Modal';
import { UserList } from './components/user/UserList';
import { RootState } from './store';
import { useGetUsersQuery } from './store/api/usersApi';
import { resetUser } from './store/slices';

function App() {
  const [IsOpen, setIsOpen] = useState(false);
  const { isLoading, data: users, isError, error } = useGetUsersQuery();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    dispatch(resetUser());
  };

  const { ...userDetail } = useSelector((state: RootState) => state.users);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center flex-1'>
        <p>Loading....</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex items-center justify-center flex-1'>
        <p className='text-red-500 text-2xl'>
          {'status' in error ? `Error: status ${error.status} ` : 'An error occurred'}
        </p>{' '}
      </div>
    );
  }

  if (!users?.length) {
    return (
      <div className='flex items-center justify-center flex-1'>
        <p className='text-2xl'>No users found.</p>;
      </div>
    );
  }

  return (
    <div className='grid grid-cols-5 gap-6 p-6 place-self-center flex-1'>
      <UserList users={users} handleOpen={handleOpen} />
      {IsOpen && (
        <Modal isOpen={IsOpen} onClose={handleClose}>
          <h2>{userDetail.phone}</h2>
          <p>{userDetail.email}</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
