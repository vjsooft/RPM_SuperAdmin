import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

let Sidemenu = [
  {
    icon: 'bi bi-dash-square-fill', title: 'Dashboard', path: '/'
  },
  {
    icon: 'bi bi-book-fill', title: 'Blog', path: 'blog'
  },
  {
    icon: 'bi bi-briefcase-fill', title: 'Coupons', path: 'coupons'
  },
  {
    icon: 'bi bi bi-archive-fill ', title: 'Service Category', path: 'service-category'
  },
  {
    icon: 'bi bi-gear-fill', title: 'Pricing Plans', path: 'pricing-plans'
  },
  {
    icon: 'bi bi-gear-fill', title: 'Service Provider', path: 'service-provider'
  },
  {
    icon: 'bi bi-gear-fill', title: 'Users', path: 'users'
  },
  {
    icon: 'bi bi-gear-fill', title: 'Reports', path: 'reports'
  },
]
export default function Sideheader() {

  return (
    <div className="sidebar">
      <div className="logo_content">
        <div className="logo">
          <div className="logo_name">
            <img src={logo} className="img-fluid" />
          </div>
        </div>
        <i className='bi bi-list' id="btn" onClick={() => {
          document.querySelector(".sidebar").classList.toggle("active")
        }}></i>
      </div>
      <ul className="nav_list">
        {
          Sidemenu.map((item, index) =>
            <li key={index}>
              <Link to={item.path}>
                <i className={item.icon}></i>
                <span className="links_name">{item.title}</span>
              </Link>
              <span className="tooltip">{item.title}</span>
            </li>
          )}
      </ul>
    </div>
  )
}
