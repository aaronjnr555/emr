import './Resources.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import pdf from '../../module/Resources/pdf.png'


const Resources = () => {
  return (
    <div className="resources">
      <div className='header'>
        <div className='button-tag'>
          <button className='button-with-icon'>
            <span>Create New Resource</span>
            <FontAwesomeIcon icon={faPlus} className='icon'/>
          </button>
          <span>
            <FontAwesomeIcon icon={faBell} className='bell'/>
          </span>
        </div>
      </div>   
      <div className='resource-body'>
        <div className="resource-tag">
          <h1>All Resources</h1>
          <p>Resources available to the user</p>
        </div>
        <div className="links">
          <button className='btn1'>Links</button>
          <button className='btn2'>Documents</button>
          <FontAwesomeIcon icon={faBars} className='dash'/>
        </div>
        <div className="schedule">
          <div className='schedule-div'>
            <div className='schedule-tag'>
              <h1>Scheduling and Appointment Management</h1>
            </div>
            <div className='website-tag'>
              <a href="www.schedulingandappointmentmanagement.org" className='website-link'>
                www.schedulingandappointmentmanagement.org
              </a>
            </div>
            <div className='schedule-pdf'>
              <img src={pdf} alt="" />
              <p>Scheduling and Appointment Management</p>
            </div>
          </div>
          <div className='medical-div'>
            <h1>Medical Terminology</h1>
            <div className='medical-div-pdf'>
              <img src={pdf} alt="" />
              <p>Medical Terminology</p>
            </div>
            <div className='understanding-pdf'>
              <img src={pdf} alt="" />
              <p>Understanding common medical terms 
                and abbreviations used in healthcare settings.
              </p>
            </div>
            <div className='schedule-tag'>
              <h1>Scheduling and Appointment Management</h1>
            </div>
            <div className='schedule-tag'>
              <a href="www.schedulingandappointmentmanagement.org" className='website-link'>
                www.schedulingandappointmentmanagement.org
              </a>
            </div>
            <div className='schedule-tag'>
              <h1>Scheduling and Appointment Management</h1>
            </div>
            <div className='schedule-tag'>
              <a href="www.schedulingandappointmentmanagement.org" className='website-link'>
                www.schedulingandappointmentmanagement.org
              </a>
            </div>
            <div className='schedule-pdf'>
              <img src={pdf} alt="" />
              <p>Scheduling and Appointment Management</p>
            </div>
          </div>
        </div>
        <div className='footer'>
          <button>Previous</button>
          <p>Page 1 of 10</p>
          <button>Next</button>
          <button>End</button>
        </div>
      </div> 
    </div>
  )
};

export default Resources;
