import React,{useEffect} from 'react'
import '../css/landing.css'
import $ from 'jquery'

const Banner = () => {
    let scroll_length = 0
    const scrollHandle = (e,w) => {
        console.log('width = ',w)
        if(e === "Left") {
            console.log(scroll_length)
            scroll_length -= 40;
        }
        else if(e === "Right") {
            console.log(scroll_length)
            scroll_length += 40;
        }
        if(scroll_length <= 0 ) scroll_length = 0;
        if(scroll_length >= w) scroll_length = w;
        return scroll_length
    }
    $(function (){
        window.addEventListener("wheel", function (e) {
            if (e.deltaY < 0) {
                $(document).scrollLeft(scrollHandle('Left',$(document).width() - $(window).width()));
            }
            else {
                $(document).scrollLeft(scrollHandle('Right',$(document).width() - $(window).width()));
            }
        });
    })

    return (
        <div className='landing container'>
            <div className='sea'></div>
            <div className='forest'></div>
            <div className='character fixed container'>
                <div className='message_top'><h1>Welcome To PokeSite</h1></div>
                <a className='container' href='/home'><img src='/PokeBall.png' alt=''/></a>
                <div className='message_bottom'><h1>Click on Pokeball</h1></div>
            </div>

        </div>
    )
}

export default Banner