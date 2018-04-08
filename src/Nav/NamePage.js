import React from 'react';
import { Link } from 'react-router-dom';

const NamePage = () => (
  <div>
    <Link className="navbar-brand" exact to="/">Movie DB</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
);

export default NamePage;
