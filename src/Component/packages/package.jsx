import React from 'react';
import '../../Component/packages/Package.css'; // You can style the cards here or inline

const package2 = () => {
  const ranks = [
    { title: 'First Rank', condition: '3 Direct ID’s + Total 10 Team Members', promotion: '₹500', reward: '₹0' },
    { title: 'Second Rank', condition: '2 Team Members must be\nFirst Rank', promotion: '₹1,500', reward: '₹0' },
    { title: 'Third Rank', condition: '2 Team Members must be\nSecond Rank', promotion: '₹3,000', reward: '₹0' },
    { title: 'Forth Rank', condition: '2 Team Members must be\nThird Rank', promotion: '₹8,000', reward: '₹0' },
    { title: 'Fifth Rank', condition: '2 Team Members must be\nForth Rank', promotion: '₹25,000', reward: '₹0' },
    { title: 'Sixth Rank', condition: 'Any 3 Team Members must be at Fifth Rank', promotion: '₹51,000', reward: 'iPhone (📱)' },
    { title: 'Seventh Rank', condition: '3 Team Members must be at Sixth Rank', promotion: '₹1,40,000', reward: 'Bike (🏍️)' },
    { title: 'Eighth Rank', condition: '3 Team Members must be at Seventh Rank', promotion: '₹2,11,000', reward: 'Thailand Tour' },
    { title: 'Nineth Rank', condition: '3 Team Members must be at Eighth Rank', promotion: '₹5,00,000', reward: 'Car (🚗)' },
    { title: 'Tenth Rank', condition: '3 Team Members must be at Ninth Rank', promotion: '₹10,00,000', reward: 'Home (🏠)' },
  ];

  return (
       <div className="container-fluid vh-100 py-4">
      <div
        className="row g-4 justify-content-center overflow-auto"
        style={{ maxHeight: '100%', paddingRight: '12px' }}
      >
        {ranks.map((rank, idx) => (
          <div className="col-10 col-sm-6 col-md-4 col-lg-3" key={idx}>
            <div className="card h-100 text-white text-center shadow" style={{
              background: '#050018',
              border: '1px solid #fff3',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.05)'
            }}>
              <h5 className="fw-bold text-warning mb-3">{rank.title}</h5>
              <p style={{ fontSize: '14px', whiteSpace: 'pre-line', minHeight: '50px' }}>{rank.condition}</p>
              <hr className="bg-light" />
              <p className="mb-1"><strong>Promotion:</strong> {rank.promotion}</p>
              <p className="mb-0"><strong>Reward:</strong> {rank.reward}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default package2;


 
