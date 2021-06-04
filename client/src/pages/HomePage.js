import React, { useState, useEffect } from 'react';
import GlobalLayout from '../components/GlobalLayout';
import authApi from '../lib/api/auth';

function HomePage() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken') || null;

    const verifyToken = async token => {
      const result = await authApi.verifyToken(token);
      console.log(result);
    };

    if (accessToken) {
      verifyToken(accessToken);
      setIsLogin(true);
    }
  });

  return (
    <GlobalLayout>
      {!isLogin && <div>Home user not logined</div>}
      {isLogin && <div>Home user logined</div>}
    </GlobalLayout>
  );
}

export default HomePage;
