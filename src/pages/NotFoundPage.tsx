import React from 'react';

const NotFoundPage: React.FC = () => {
  const info: string = 'Такой страницы не существует, ошибка 404';
  return <div>{info}</div>;
};

export default NotFoundPage;
