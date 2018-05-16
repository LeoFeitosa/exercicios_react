import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
  <div>
    <h3>Membros da familia</h3>
    { childrenWithProps(props.children, props) }
  </div>
)
