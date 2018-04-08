// import React, { Component } from 'react';
import React from 'react';
import ItemsSection from './Componentes/ItemsSection';

const Home = () => (
  <div>
    <main role="main">
      <div className="py-5 bg-light">
        <div className="container">
          <ItemsSection />
          <ItemsSection />
          <ItemsSection />
        </div>
      </div>
    </main>
  </div>
);

export default Home;
