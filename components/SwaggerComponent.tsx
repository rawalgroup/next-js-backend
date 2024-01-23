// components/SwaggerUI.js
import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerComponent = ({ spec }:any) => {
  return <SwaggerUI spec={spec} />;
};

export default SwaggerComponent;
