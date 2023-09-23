import React from 'react'
import AdminEvents from '../components/Admin/AdminEvents'
import AdminHeader from '../components/Admin/Layout/AdminHeader'
import AdminSidebar from '../components/Admin/Layout/AdminSidebar'

const AdminDashboardWithdrawRequestPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSidebar active={7} />
          </div>
          <AdminEvents />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardWithdrawRequestPage