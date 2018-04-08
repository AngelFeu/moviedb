// import React, { Component } from 'react';
import React from 'react';
import ListItem from './ListItem';

const ViewedItems = () => (
  <section class="items-section">
    <div class="items-section-body">
      <div class="row">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  </section>
);

export default ViewedItems;
