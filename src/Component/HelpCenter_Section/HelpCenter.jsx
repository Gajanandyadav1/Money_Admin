import React from "react"; 

const HelpCenter = () => {
  const queries = [
    {
      id: 1,
      userId: "1",
      userName: "User A",
      query: "my withdrawal Amount is not success please check",
      file: "https://via.placeholder.com/40", // placeholder image
      dateTime: "2024-11-09  ",
    },
    {
      id: 2,
      userId: "2",
      userName: "User B",
      query: "sir my withdrawal Amount is not success",
      file: "https://via.placeholder.com/40",
      dateTime: "2024-11-14  ",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="box p-3 bg-white shadow-sm rounded">
        <h5 className="page-title">Help Center</h5>

        <div className="table-responsive mt-3">
          <table className="table table-bordered align-middle text-center">
            <thead className="custom-table-header text-nowrap" style={{fontSize:'14px'}}>
              <tr>
                <th>Sr. No.</th>
                <th>User Id</th>
                <th>User Name</th>
                <th>Query</th>
                <th>Attached File</th>
                <th>Answer</th>
                <th>Date Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{fontSize:'14px'}}    >
              {queries.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.userId}</td>
                  <td>{item.userName}</td>
                  <td>{item.query}</td>
                  <td>
                    <img src={item.file} alt="Attachment" width="20" />
                  </td>
                  <td>
                    <textarea rows="2" className="form-control"></textarea>
                  </td>
                  <td>{item.dateTime}</td>
                  <td>
                    <button className="btn btn-success mb-2  px-0 px-2" style={{fontSize:'12px'}}>Submit Answer</button>
                    <br />
                    <button className="btn btn-danger  "  style={{fontSize:'12px'}}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
