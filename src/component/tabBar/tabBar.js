import React from 'react';
import {Link} from 'react-router-dom'
import './tabBar.css'

export default () => {
  return (
    <ul className="tab-bar flex">
      <li className="flex-item"><Link to="/">我的还款</Link></li>
      <li className="flex-item"><Link to="/app">申请列表</Link></li>
      <li className="flex-item"><Link to="/product">常见问题</Link></li>
    </ul>
  )
}