import React, { useState } from 'react';
import './profile.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <h2>Dashboard Content</h2>;
      case 'users':
        return <h2>Manage Users Content</h2>;
      case 'resources':
        return (
          <div>
            <h2>Add Resources Content</h2>

            <div className="container">
              <div className="row">
                <div className="row-container">
                  <div
                    className="item-container"
                    style={{ padding: 1.5 + 'em' }}
                    onClick={() => openModal('Add College')}
                  >
                    Add College
                  </div>
                </div>

                <div className="row-container">
                  <div
                    className="item-container"
                    style={{ padding: 1.5 + 'em' }}
                    onClick={() => openModal('Add Course')}
                  >
                    Add Course
                  </div>
                </div>

                <div className="row-container">
                  <div
                    className="item-container"
                    style={{ padding: 1.5 + 'em' }}
                    onClick={() => openModal('Add Branch')}
                  >
                    Add Branch
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="row-container">
                  <div
                    className="item-container"
                    style={{ padding: 1.5 + 'em' }}
                    onClick={() => openModal('Add Subject')}
                  >
                    Add Subject
                  </div>
                </div>

                <div className="row-container">
                  <div
                    className="item-container"
                    style={{ padding: 1.5 + 'em' }}
                    onClick={() => openModal('Add Unit')}
                  >
                    Add Unit
                  </div>
                </div>

                <div className="row-container">
                  <div
                    className="item-container"
                    style={{ padding: 1.5 + 'em' }}
                    onClick={() => openModal('Add Topic')}
                  >
                    Add Topic
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return <h2>Settings Content</h2>;
      default:
        return <h2>Welcome to Admin Panel</h2>;
    }
  };


  const renderModalContent = (content) => {
    switch (content) {
      case 'Add College':
        return (
          <div className="model-container">
            <form action="" method="post">

              <label htmlFor="college" className='label'>College Name</label>
              <input type="text" name="college" placeholder='College' id="college" className='input' />
              <label htmlFor="message" className='message'>message</label>
              <button type="submit" className='button' id='submit-button'>Add College</button>

            </form>
          </div>
        );
      case 'Add Course':
        return (
          <div className="model-container">
            <form action="" method="post">
              <label htmlFor="course" className='label'>Course Name</label>
              <input type="text" name="college " id="college" className='input' />
              <label htmlFor="course" className='label'>Select College</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select college</option>
                <option value="cse">Computer Science</option>
                <option value="ece">Electronics & Communication</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="civil">Civil Engineering</option>
              </select>
              <label htmlFor="message" className='message'>message</label>
              <button type="submit" className='button' id='submit-button'>Add Course</button>
            </form>
          </div>
        );
      case 'Add Branch':
        return (
          <div className="model-container">
            <form action="" method="post">

              <label htmlFor="course" className='label'>Branch Name</label>
              <input type="text" name="college" placeholder='Branch' id="college" className='input' />
              <label htmlFor="course" className='label'>Select College</label>

              <select name="college" id="select-college" >
                <option value="" disabled selected>Select college</option>
                <option value="cse">Computer Science</option>
                <option value="ece">Electronics & Communication</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="civil">Civil Engineering</option>
              </select>

              <label htmlFor="course" className='label'>Select Course</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select Course</option>
                <option value="cse">Computer Science</option>
                <option value="ece">Electronics & Communication</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="civil">Civil Engineering</option>
              </select>
              <label htmlFor="message" className='message'>message</label>
              <button type="submit" className='button' id='submit-button'>Add Branch</button>

            </form>
          </div>
        );
      case 'Add Subject':
        return (
          <div className="model-container">
            <form action="" method="post">

              <label htmlFor="course" className='label'>Subject Name</label>
              <input type="text" name="college" placeholder='Subject' id="subject" className='input' />

              <label htmlFor="course" className='label'>Select College</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select college</option>
                <option value="cse">Computer Science</option>
                <option value="ece">Electronics & Communication</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="civil">Civil Engineering</option>
              </select>

              <label htmlFor="course" className='label'>Select Course</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select Course</option>
                <option value="cse">Computer Science</option>
                <option value="ece">Electronics & Communication</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="civil">Civil Engineering</option>
              </select>

              <label htmlFor="course" className='label'>Select Branch</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select Course</option>
                <option value="cse">Computer Science</option>
                <option value="ece">Electronics & Communication</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="civil">Civil Engineering</option>
              </select>

              <label htmlFor="course" className='label'>Select Semister</label>
              <input type="number" name="semister" placeholder='Semister (max 10)' id="semister" className='input' max={10} min={1}/>
              <label htmlFor="message" className='message'>message</label>
              <button type="submit" className='button' id='submit-button'>Add Branch</button>

            </form>
          </div>
        );
      case 'Add Unit':
        return (
          <div className="model-container">
            <form action="" method="post">

              <label htmlFor="course" className='label'>Unit Name</label>
              <input type="text" name="college" placeholder='Subject' id="subject" className='input' />

              <label htmlFor="course" className='label'>Select College</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select college</option>
                <option value="cse">Computer Science</option>
              </select>

              <label htmlFor="course" className='label'>Select Course</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select Course</option>
                <option value="cse">Computer Science</option>

              </select>

              <label htmlFor="course" className='label'>Select Branch</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select Course</option>
                <option value="cse">Computer Science</option>
              </select>

              <label htmlFor="course" className='label'>Select Semister</label>
              <input type="number" name="semister" placeholder='Semister (max 10)' id="semister" className='input' max={10} min={1}/>
              
              <label htmlFor="course" className='label'>Select Subject</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select Subject</option>
                <option value="cse">Computer Science</option>
              </select>

              <label htmlFor="message" className='message'>message</label>

              <button type="submit" className='button' id='submit-button'>Add Branch</button>

            </form>
          </div>
        );
      case 'Add Topic':
        return (
          <div className="model-container">
            <form action="" method="post">

              <label htmlFor="course" className='label'>Topic Name</label>
              <input type="text" name="college" placeholder='Subject' id="subject" className='input' />

              <label htmlFor="course" className='label'>Select College</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select college</option>
                <option value="cse">Computer Science</option>
              </select>

              <label htmlFor="course" className='label'>Select Course</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select Course</option>
                <option value="cse">Computer Science</option>

              </select>

              <label htmlFor="course" className='label'>Select Branch</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select Course</option>
                <option value="cse">Computer Science</option>
              </select>

              <label htmlFor="course" className='label'>Select Semister</label>
              <input type="number" name="semister" placeholder='Semister (max 10)' id="semister" className='input' max={10} min={1}/>
              
              <label htmlFor="course" className='label'>Select Subject</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select Subject</option>
                <option value="cse">Computer Science</option>
              </select>

              <label htmlFor="course" className='label'>Select Unit</label>
              <select name="college" id="select-college" >
                <option value="" disabled selected>Select Unit</option>
                <option value="cse">Computer Science</option>
              </select>

              <label htmlFor="message" className='message'>message</label>

              <button type="submit" className='button' id='submit-button'>Add Branch</button>

            </form>
          </div>
        );
      default:
        return <h2>Modal Content</h2>;
    }
  };


  return (
    <div className="admin-panel">
      <header className="admin-header">
        <h1>Admin Panel</h1>
      </header>
      <div className="admin-container">
        <nav className="admin-sidebar">
          <ul>
            <li
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </li>
            <li
              className={activeTab === 'users' ? 'active' : ''}
              onClick={() => setActiveTab('users')}
            >
              Manage Users
            </li>
            <li
              className={activeTab === 'resources' ? 'active' : ''}
              onClick={() => setActiveTab('resources')}
            >
              Add Resources
            </li>
            <li
              className={activeTab === 'settings' ? 'active' : ''}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </li>
          </ul>
        </nav>
        <main className="admin-content">{renderContent()}</main>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h3>{modalContent}</h3>
            {renderModalContent(modalContent)}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
