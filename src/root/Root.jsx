import { Outlet } from 'react-router-dom'
import Navbar from '../componets/Navbar'
function Root() {
  return (
    <div>
      <div className="w-full max-w-[1170px]  mx-auto">
        <Navbar />
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Root