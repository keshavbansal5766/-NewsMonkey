import loading from './Spinner@1x-1.0s-200px-200px.gif'
import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center my-3'><img src={loading} alt="" /></div>
    )
  }
}
