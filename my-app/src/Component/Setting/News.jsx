import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const News = () => {
  const [news, setNews] = useState('');

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <h5 className="bg-light p-3 rounded-pill">Add new settings</h5>
      </div>

      <div className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-bold">News</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter news here"
            value={news}
            onChange={(e) => setNews(e.target.value)}
          />
        </div>

        <div>
          <button className="btn btn-success me-2">Submit</button>
          <button className="btn btn-danger">Cancel</button>
        </div>
      </div>
    </div>
  );
};
 


export default News
