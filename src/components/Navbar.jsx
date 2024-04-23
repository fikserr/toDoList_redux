import rocket from '../img/rocket.svg'

function Navbar() {
  return (
    <div className="navbar">
        <div className="container">
            <div className="navbar__content">
                <h1 className="navbar__title"><img src={rocket} alt="" className='navbar__title-img'/>Attendance list</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar