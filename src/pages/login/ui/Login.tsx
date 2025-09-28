import { memo } from 'react';
import {  GoogleOAuthProvider } from '@react-oauth/google';
import { LoginWrapper } from '../../../features/auth';



export const Login = memo(() => {
  return (
    <div>
      <GoogleOAuthProvider clientId="113296338937-hpfu9ogtspjjo2f8iqedm30qn69pe1j5.apps.googleusercontent.com">
        <LoginWrapper/>
      </GoogleOAuthProvider>
    </div>
  );
});
