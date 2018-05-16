import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <div>
    <Family lastName="Silva">
      <Member name="Leo" />
      <Member name="João" />
      <Member name="Maria" />
    </Family>
  </div>,
  document.getElementById('app'))
