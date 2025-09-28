import { GoogleLogin } from '@react-oauth/google';
import { memo } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setUser } from '../model/authSlice';

export const LoginWrapper = memo(() => {
  const dispatch = useDispatch();
  return (
    <div className='min-h-[65.4vh]'>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const payload = jwtDecode(credentialResponse.credential as string);
          dispatch(setUser(payload));
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
});
