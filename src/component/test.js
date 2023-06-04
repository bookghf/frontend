import React from 'react'
import '../css/test.css'
const Test = () => {
    return (
        <div className='test'>
            <div className='scene'>
                <div className='floor'></div>
                <div className='cube'>
                    <div className='front'></div>
                    <div className='back'></div>
                    <div className='right'></div>
                    <div className='left'></div>
                    <div className='top'>
                        <div className='ballShadow'></div>
                    </div>
                    <div className='bottom'></div>
                </div>
                <div className='ball'></div>
            </div>
        </div>
    )
}

export default Test