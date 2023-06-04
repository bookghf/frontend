import React, { useState, useEffect } from 'react'
import {FiArrowRight} from "react-icons/fi";
import ReactLoading from 'react-loading';
import "../css/pokemonDetail.css"

const PokemonDetail = ({data ,Gen, No , Name}) => {
  const [detail, setDetail] = useState();
  const [specieURL, setSpecieURL] = useState();
  const [chainURL, setChainURL] = useState();
  const [chain, setChain] = useState();
  
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
    fetch(`https://pokeapi.co/api/v2/pokemon/${No}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data)
        setSpecieURL(data.species.url)
        console.log(data)
      })
  }, [])

  useEffect(() => {
    fetch(`${specieURL}`)
      .then((res)=> res.json())
      .then((data)=> {
        setChainURL(data.evolution_chain.url)
      })
  }, [specieURL])

  useEffect(() => {
    fetch(`${chainURL}`)
      .then((res)=> res.json())
      .then((data)=> {
        setChain(data.chain)
      })
  }, [chainURL])

  const checkEvo = (e) => {
    
    if ((typeof e?.evolves_to[0] !== "undefined")||(typeof e?.species?.name !== "undefined")) {
      return (
      <div>
        <div>{chain?.species?.name}</div>
        
      </div>)
    }
  }

  const getImage = () => {
    data.map((member,i)=>{
      if(member?.name === chain?.species?.name) {
        <div>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`} alt=''/> 
        </div>
      }
    })
  }


  return (
    <div className='pokemonDetail'>
      {typeof chain === "undefined" ? (
        <div style={{display:'flex', justifyContent:'center'}}>
          <ReactLoading type={"bars"} color={"#34a0ff"} height={"20%"} width={"20%"}/>
        </div>
      ) : (
        <div className='pokemonDetail container'>
          <div className='card-detail'>
            <div className={`left-side`}>
              <div className='detail-name container'>
                <p>{Name.toUpperCase()}</p>
              </div>
              <div className='photo container'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${No}.png`} alt=''/>
              </div>
              <div className='element container'>
                {
                  detail.types?.map((member) => {
                    return (
                      <div className={`type container ${member.type.name}`} key={member.type.name}>
                        <p>{member.type.name.toUpperCase()}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='right-side'>
              <div className='evo_chain container'>
                {data.map((member, i) => {
                  if (member?.name === chain?.species?.name) {
                    return(
                      <div className='evolves container'>
                        <div className='evolve'>
                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`} alt='' />
                          <div className='evo_name'>{chain?.species?.name}</div>
                        </div>
                      </div>
                  )}
                })}
                {data.map((member, i) => {
                  if (member?.name === chain?.evolves_to[0]?.species?.name) {
                    return(
                      <div className='evolves container'>
                        <div className='icon'>
                          <FiArrowRight />
                        </div>
                        <div className='evolve'>
                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`} alt='' />
                          <div className='evo_name'>{chain?.species?.name}</div>
                        </div>
                      </div>
                      
                  )}
                })}
                {data.map((member, i) => {
                  if (member?.name === chain?.evolves_to[0]?.evolves_to[0]?.species?.name) {
                    return(
                      <div className='evolves container'>
                        <div className='icon'>
                          <FiArrowRight />
                        </div>
                        <div className='evolve'>
                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`} alt='' />
                          <div className='evo_name'>{chain?.evolves_to[0]?.evolves_to[0]?.species?.name}</div>
                        </div>
                      </div>
                  )}
                })}
                {data.map((member, i) => {
                  if (member?.name === chain?.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species?.name) {
                    return(
                      <div className='evolves container'>
                        <div className='icon'>
                          <FiArrowRight />
                        </div>
                        <div className='evolve'>
                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`} alt='' />
                          <div className='evo_name'>{chain?.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species?.name}</div>
                        </div>
                      </div>
                  )}
                })}
              </div>
              <div className='ability container'>
                <div className='ability_container'>
                  {detail?.abilities?.map((member,i)=>{
                    return (<div className='ability_wrap'>
                      {(member?.is_hidden === true)?(<p>Hidden Ability :</p>):(<p>Normal Ability :</p>)}
                      <p>{member?.ability?.name}</p>
                    </div>)
                  })}
                </div>
              </div>
              <div className='stats'>
                <div className='stat hp'>
                  <div className='stat_wrap'>
                    <p>HP</p>
                    <p>{detail?.stats[0]?.base_stat}</p>
                  </div>
                  <div className='graph_wrap'>
                    {(() => {
                      const options = [];

                      for (let i = 0; i <= parseInt(detail?.stats[0]?.base_stat); i++) {
                        options.push(<div className='graph' />);
                      }

                      return options;
                    })()}
                  </div>
                </div>
                <div className='stat atk'>
                  <div className='stat_wrap'>
                    <p>Atk</p>
                    <p>{detail?.stats[1]?.base_stat}</p>
                  </div>
                  <div className='graph_wrap'>
                    {(() => {
                      const options = [];

                      for (let i = 0; i <= parseInt(detail?.stats[1]?.base_stat); i++) {
                        options.push(<div className='graph'/>);
                      }

                      return options;
                      })()}
                  </div>
                </div>
                <div className='stat def'>
                  <div className='stat_wrap'>
                    <p>Def</p>
                    <p>{detail?.stats[2]?.base_stat}</p>
                  </div>
                  <div className='graph_wrap'>
                    {(() => {
                      const options = [];

                      for (let i = 0; i <= parseInt(detail?.stats[2]?.base_stat); i++) {
                        options.push(<div className='graph' />);
                      }

                      return options;
                    })()}
                  </div>
                </div>
                <div className='stat spatk'>
                  <div className='stat_wrap'>
                    <p>Sp.Atk</p>
                    <p>{detail?.stats[3]?.base_stat}</p>
                  </div>
                  <div className='graph_wrap'>
                    {(() => {
                      const options = [];

                      for (let i = 0; i <= parseInt(detail?.stats[3]?.base_stat); i++) {
                        options.push(<div className='graph' />);
                      }

                      return options;
                    })()}
                  </div>
                  </div>
                <div className='stat spdef'>
                  <div className='stat_wrap'>
                    <p>Sp.Def</p>
                    <p>{detail?.stats[4]?.base_stat}</p>
                  </div>
                  <div className='graph_wrap'>
                    {(() => {
                      const options = [];

                      for (let i = 0; i <= parseInt(detail?.stats[4]?.base_stat); i++) {
                        options.push(<div className='graph' />);
                      }

                      return options;
                    })()}
                  </div>
                  </div>
                <div className='stat spd'>
                  <div className='stat_wrap'>
                    <p>Spd</p>
                    <p>{detail?.stats[5]?.base_stat}</p>
                  </div>
                  <div className='graph_wrap'>
                    {(() => {
                      const options = [];

                      for (let i = 0; i <= parseInt(detail?.stats[5]?.base_stat); i++) {
                        options.push(<div className='graph' />);
                      }

                      return options;
                    })()}
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

      )}
    <a href="/home" style={{ textDecoration: 'none' }}><div className='backButton container'><p>Back</p></div></a>
    </div>
  )
}

export default PokemonDetail