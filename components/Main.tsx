import React from 'react';
import { useUsers } from '../core/Users';

const Main = () => {
  const usersModule = useUsers();

  switch (usersModule.users.kind) {
    case 'Loading':
      return <div>Cargando...</div>;
    case 'Ready':
      usersModule;
  }
};

export default Main;
