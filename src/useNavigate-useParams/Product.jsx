// import React from 'react'

import { useNavigate } from "react-router-dom"

export default function Product() {
    const navigate = useNavigate()
    return (
        <div>
            {/* dung de chuyen trang : ContactPage */}
            <button onClick={() => navigate("/contact")}>Go to Contact Page</button>
            {/* su dung navigate voi history */}
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate(-2)}>Back Back</button>
            <button onClick={() => navigate(1)}>Forward</button>
            {/* su dung navigate voi replace = true  => khong luu history */}
            <button onClick={() => navigate("/contact", { replace: true })}>Go to Contact Page - Not save History</button>
            {/*  su dung navigate de truyen du lieu, de lay duoc du lieu thi o thang (ContactPage)=> useLocation de nhan Data */}
            <button onClick={() => navigate("/contact", { state: { number: 10 } })}>Go to Contact with Data</button>
        </div>
    )
}
