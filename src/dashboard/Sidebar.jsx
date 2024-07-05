import { Sidebar } from "flowbite-react";
// import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg"
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import "./Sidebar.css"
import SidebarLogo from './SidebarLogo';

const SideBar = () => {

  const {user} = useContext(AuthContext);



  return (
    <Sidebar aria-label="Sidebar with content separator example">
        <div className="sidebar m-4">
            <SidebarLogo href="#" img={user?.photoURL} imgAlt="User Photo" displayName={user?.displayName} />
            {/* Other sidebar content */}
        </div>
        <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiUser}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloud}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/shop" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Log In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        {/* <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiSupport}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup> */}
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar