import React, { useState, useEffect } from "react";
import '../css/home.css'
import ReactLoading from 'react-loading'
import { Link } from "react-router-dom";
import {FaAngleLeft,FaAngleRight} from "react-icons/fa";


const Home = ({data,setData,gen,setGen}) => {
    const [click,setClick] = useState(true);
    const [ready,setReady] = useState(false);
    const gen0 = 0
    const gen1 = 151
    const gen2 = 251
    const gen3 = 386
    const gen4 = 493
    const gen5 = 649
    const gen6 = 721
    const gen7 = 809
    const gen8 = 905

    useEffect(() => {
        window.scrollTo(0,0);
        if(localStorage.getItem('gen') !== null ){
            setGen(parseInt(localStorage.getItem('gen')));
            setReady(true);
        }
    }, []);

    const handleClick = () => setClick(!click);

    const createCard = (member,i) => {
        return (
            <Link to={`/pokemon/${gen}/${i+1}/${member.name}`}  style={{ textDecoration: 'none' }} key={member.name} >
                <div className="card" >
                    <div className="name container" key={i}>
                        <p>{i + 1}.{member.name}</p>
                    </div>
                    <div className="img container">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`} alt="" />
                    </div>
                </div>
            </Link>)
    }
    const checkGenHandle = (member, i) => {
        if ((gen === 1) & (i >= gen0) & (i < gen1)) return createCard(member, i)
        else if ((gen === 2) & (i >= gen1) & (i < gen2)) return createCard(member, i)
        else if ((gen === 3) & (i >= gen2) & (i < gen3)) return createCard(member, i)
        else if ((gen === 4) & (i >= gen3) & (i < gen4)) return createCard(member, i)
        else if ((gen === 5) & (i >= gen4) & (i < gen5)) return createCard(member, i)
        else if ((gen === 6) & (i >= gen5) & (i < gen6)) return createCard(member, i)
        else if ((gen === 7) & (i >= gen6) & (i < gen7)) return createCard(member, i)
        else if ((gen === 8) & (i >= gen7) & (i < gen8)) return createCard(member, i)     
    }
    const genClickHandle = (gen) =>{
        setGen(gen);
        localStorage.setItem('gen', gen);
        window.scrollTo(0,0);
    }

    return (
        <div className="home">
            <div className="gen container">
                {(click) ? (
                    <div className="all-gen">
                        <div className={(gen === 1)?("poke-gen current container"):("poke-gen container")} onClick={() => genClickHandle(1)}><p>Gen1</p></div>
                        <div className={(gen === 2)?("poke-gen current container"):("poke-gen container")} onClick={() => genClickHandle(2)}><p>Gen2</p></div>
                        <div className={(gen === 3)?("poke-gen current container"):("poke-gen container")} onClick={() => genClickHandle(3)}><p>Gen3</p></div>
                        <div className={(gen === 4)?("poke-gen current container"):("poke-gen container")} onClick={() => genClickHandle(4)}><p>Gen4</p></div>
                        <div className={(gen === 5)?("poke-gen current container"):("poke-gen container")} onClick={() => genClickHandle(5)}><p>Gen5</p></div>
                        <div className={(gen === 6)?("poke-gen current container"):("poke-gen container")} onClick={() => genClickHandle(6)}><p>Gen6</p></div>
                        <div className={(gen === 7)?("poke-gen current container"):("poke-gen container")} onClick={() => genClickHandle(7)}><p>Gen7</p></div>
                        <div className={(gen === 8)?("poke-gen current container"):("poke-gen container")} onClick={() => genClickHandle(8)}><p>Gen8</p></div>
                    </div>
                ) : (null)}
                <div className="show-hide-sign" onClick={handleClick}>
                    {(click) ? (<FaAngleLeft size={40} />) : (<FaAngleRight size={40} />)}
                </div>

            </div>
            <div className="content container">
                <div className="show grid">
                    {((typeof data !== "undefined")&&(typeof ready !==  false)) ? (
                        data.map((member, i) => (
                            checkGenHandle(member,i)
                            ))
                    ) : (
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <ReactLoading type={"bars"} color={"#34a0ff"} height={"20%"} width={"20%"}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
