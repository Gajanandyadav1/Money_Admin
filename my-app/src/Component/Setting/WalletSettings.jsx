import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WalletSettings = () => {
  const [qrPreview, setQrPreview] = useState(null);
  const [wallet, setWallet] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setQrPreview(URL.createObjectURL(file));
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <h5 className="bg-light p-3 rounded-pill">Add new settings</h5>
      </div>

      <div className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-bold">QR Image</label>
          <input type="file" className="form-control" onChange={handleFileChange} />
          {qrPreview && (
            <div className="mt-3">
              <img src={qrPreview} alt="QR Preview" width="80" height="80" />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Wallet Address</label>
          <input
            type="text"
            className="form-control"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
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

export default WalletSettings;
 
