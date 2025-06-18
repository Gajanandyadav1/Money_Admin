import React, { useState, useRef, useEffect } from 'react';
import '../Home.css';
import { API_URL } from '../../env';
import { Modal, Button, Table, Pagination } from 'react-bootstrap';

const WithdrawHistory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchUsername, setSearchUsername] = useState("");

  const tabStatus = ['Approved', 'Pending', 'Rejected'];

  const fetchWithdrawData = (status, page = 1) => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    fetch(`${API_URL}/api/admin/v1/withdraw?status=${status}&page=${page}&username=${searchUsername}`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setDataList(result?.data?.requests || []);
          setTotalPages(result?.data?.totalPages || 1);
          setCurrentPage(result?.data?.currentPage || 1);
        } else {
          setDataList([]);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (searchUsername.length >= 3 || searchUsername.length === 0) {
      setCurrentPage(1);
    }
  }, [searchUsername]);

  useEffect(() => {
    if (searchUsername.length >= 3 || searchUsername.length === 0) {
      fetchWithdrawData(tabStatus[activeTab], currentPage);
    }
  }, [activeTab, currentPage, searchUsername]);

  const handleShowModal = (userDetails) => {
    setSelectedUser(userDetails);
    setShowModal(true);
  };

  const handlePageChange = (pageNum) => {
    if (pageNum > 0 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const renderTable = (data) => {
    if (!data || data.length === 0) {
      return (
        <div className="no-data-found text-center my-4 animate__animated animate__fadeIn">
          <img src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt="No Data" width={100} />
          <h5 className="mt-3 text-muted">No Data Found</h5>
        </div>
      );
    }

    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>UserId</th>
            <th>Mobile</th>
            <th>Amount</th>
            <th>Payable</th>
            <th>Status</th>
            <th>Bank Info</th>
          </tr>
        </thead>
        <tbody>
          {data.map((req, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{req.userDetails?.name}</td>
              <td>{req.userDetails?.username}</td>
              <td>{req.userDetails?.mobile}</td>
              <td>{req.amount}</td>
              <td>{req.payableAmount}</td>
              <td>{req.status}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  className=' '
                  onClick={() => handleShowModal(req.userDetails?.userDetails)}
                  disabled={!req.userDetails?.userDetails}
                >
                  user Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const tabs = tabStatus.map((status) => ({
    title: `Withdraw ${status}`,
    content: (
      <>
        {/* Search bar outside the table, always visible */}
        <input
          type="text"
          className="form-control mb-3 p-2 searchinputbox"
          placeholder="Search by UserId"
          value={searchUsername}
          onChange={(e) => setSearchUsername(e.target.value)}
          style={{ width: '50%' }}
        />
        {renderTable(dataList)}
      </>
    )
  }));

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10 mt-4 m-auto'>
            <div className="tab-header">
              <div className="tab-highlight" style={indicatorStyle} />
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  ref={el => (tabRefs.current[index] = el)}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className="full-tab-wrapper">
              {loading ? (
                <p className="text-center my-3">Loading...</p>
              ) : (
                <div className="tab-content">
                  <div className="tab-panel">{tabs[activeTab].content}</div>

                  {/* Pagination */}
                  <Pagination className="justify-content-center mt-3">
                    <Pagination.Prev
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    />
                    {Array.from({ length: totalPages }, (_, i) => (
                      <Pagination.Item
                        key={i + 1}
                        active={i + 1 === currentPage}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    />
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>User Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser ? (
            <>
              <p><strong>Bank Name:</strong> {selectedUser.bankName}</p>
              <p><strong>Account Number:</strong> {selectedUser.accountNumber}</p>
              <p><strong>IFSC Code:</strong> {selectedUser.ifscCode}</p>
            </>
          ) : (
            <p>No bank details available.</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WithdrawHistory;
