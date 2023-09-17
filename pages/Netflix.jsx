import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import backgroundImage from '../assests/home.jpg'
import MovieLogo from '../assests/homeTitle.webp'
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const genresLoaded=useSelector((state)=>state.netflix.genresLoaded);
  const movies = useSelector((state)=>state.netflix.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(()=>{
    if(genresLoaded) dispatch(fetchMovies({type: "movie"}));
  },[genresLoaded]);
  

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () =>( window.onscroll = null);
  };
// console.log(movies);
  
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img src={backgroundImage} alt="background" className='background-image' />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="MovieLogo" />
          </div>
          <div className="buttons flex">
            <button className="flex j-center a-center" onClick={() => navigate('/player')}>
              <FaPlay />Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />More Info
            </button>

          </div>
        </div>

      </div>
      <Slider movies={movies}/>
    </Container>
  )
}


const Container = styled.div`
  
  .hero{
    position: relative;
    .background-image{
      filter:brightness(60%);
    }
    img{
      height:100vh;
      width:100wh;
      margin-left:10rem
    }
    .container{
      position:absolute;
      bottom:5rem;
      .logo{
        img{
          width:100%;
          height:100%;
          margin-left:5rem;
        }
      }
      .buttons{
        margin:5rem;
        gap:2rem;
        
        button{
          font-size:1.4rem;
          gap:1rem;
          border-radium:0.2rem;
          padding:0.5rem;
          padddin-left:2rem;
          padding-right:2.4rem;
          border:none;
          cursonr:pointer;
          transition:0.3s ease-in-out;
          &:hover{
            opacity:0.8;
            

          }
          &:nth-of-type(2){
            background-color:rgba(109,109,110,0.7);
            color:white;
            svg{
              font-size:1.8rem;
            }
          }
        }
      }
    }
  } `