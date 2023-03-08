import React, {useContext} from 'react';

import AppRoutes from '../routes/app.routes';
import AuthRoutes from '../routes/auth.routes';

import {AuthContext} from '../contexts/auth';

import Loading from '../Components/Loading';

export default function Routes() {
  const {signed, loadStorageUser} = useContext(AuthContext);

  if (loadStorageUser) {
    return <Loading />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
