import React from 'react'
import { connect } from 'react-redux'
import img from '../loading_spiner.gif'

const Loading = ({ loading }) => (
    loading ?
        <div style={{ textAlign:'center' }}>
            <img src={img} alt='laoding' />
            <h1>LOADING</h1>
        </div>
        : null
)

const mapStateToProps = (state) => (
    {
        loading: state.loading
    }
)

export default connect(mapStateToProps)(Loading)

















