import React, { useState } from 'react'; 
import '../index.css';
const Transaction = () => {
  const allTransactions = [
    { id: 1, userId: 'AK66151', name: 'Ram', type: 'trade_income', desc: '4 Amount Is Credit To Your Account For Daily Income', amount: '4.00$', date: '2025-05-21', time: '01:00:06' },
    { id: 2, userId: 'AK49686', name: 'Rajiv', type: 'trade_income', desc: '1 Amount Is Credit To Your Account For Daily Income', amount: '1.00$', date: '2025-05-21', time: '01:00:06' },
    { id: 3, userId: 'AK66151', name: 'Ram', type: 'trade_income', desc: '4 Amount Is Credit To Your Account For Daily Income', amount: '4.00$', date: '2025-05-20', time: '01:00:06' },
    { id: 4, userId: 'AK49686', name: 'Rajiv', type: 'trade_income', desc: '1 Amount Is Credit To Your Account For Daily Income', amount: '1.00$', date: '2025-05-20', time: '01:00:06' },
    { id: 5, userId: 'AK66151', name: 'Ram', type: 'trade_income', desc: '4 Amount Is Credit To Your Account For Daily Income', amount: '4.00$', date: '2025-05-19', time: '01:00:05' },
    { id: 6, userId: 'AK49686', name: 'Rajiv', type: 'trade_income', desc: '1 Amount Is Credit To Your Account For Daily Income', amount: '1.00$', date: '2025-05-19', time: '01:00:05' },
    { id: 7, userId: 'AK66151', name: 'Ram', type: 'trade_income', desc: '4 Amount Is Credit To Your Account For Daily Income', amount: '4.00$', date: '2025-05-17', time: '01:00:05' },
    { id: 8, userId: 'AK49686', name: 'Rajiv', type: 'trade_income', desc: '1 Amount Is Credit To Your Account For Daily Income', amount: '1.00$', date: '2025-05-17', time: '01:00:05' },
    { id: 9, userId: 'AK66151', name: 'Ram', type: 'trade_income', desc: '4 Amount Is Credit To Your Account For Daily Income', amount: '4.00$', date: '2025-05-15', time: '01:00:05' },
    { id: 10, userId: 'AK49686', name: 'Rajiv', type: 'trade_income', desc: '1 Amount Is Credit To Your Account For Daily Income', amount: '1.00$', date: '2025-05-15', time: '01:00:05' },
   
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const paginatedTransactions = allTransactions.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(allTransactions.length / rowsPerPage);

  return (
<>
    <div className="container pt-4 helo" style={{ height: '93vh', overflowY: 'scroll' }}>
      <h5 className="fw-semibold mb-3">Transaction</h5>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <label>Start date:</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-3">
          <label>End date:</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-3">
          <label>User ID & User Name</label>
          <input type="text" className="form-control" placeholder="Name,Username" />
        </div>
        <div className="col-md-3">
          <label>Type</label>
          <input type="text" className="form-control" placeholder="Type" />
        </div>
      </div>

      <button className="btn btn-success mb-4">Search Now</button>

      <h5 className="fw-semibold mb-3">All Transaction</h5>
      <div className="table-responsive">
        <table className="table table-bordered text-center custom-table">
          <thead>
            <tr>
              <th>SR. No.</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((tx, i) => (
              <tr key={tx.id}>
                <td>{(currentPage - 1) * rowsPerPage + i + 1}</td>
                <td>{tx.userId}</td>
                <td>{tx.name}</td>
                <td>{tx.type}</td>
                <td>{tx.desc}</td>
                <td>{tx.amount}</td>
                <td>{tx.date}</td>
                <td>{tx.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-start">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button onClick={() => setCurrentPage(i + 1)} className="page-link">
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Transaction;
 
