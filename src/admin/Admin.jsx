import React from 'react'
import "../admin/admincss/Admin.css"
import { Link, Outlet } from 'react-router-dom';
import AdminHeader from './Admin-header';

export default function Admin() {
    return (
        <>
            <AdminHeader/>
            <Outlet />
        </>
    )
}
