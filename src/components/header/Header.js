import React ,{useState} from 'react'
import "./_header.scss"

import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications, MdApps} from "react-icons/md"
import { useHistory } from 'react-router'

const Header = ({handleToggleSidebar}) => {


    const [input, setInput] = useState(' ');

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        history.push(`search/${input}`)
    }


    return (
        <div className="border border-dark header">
            <FaBars 
            className="header__menu" 
            size={26} 
            onClick={() => handleToggleSidebar()}
            />

            <img
                src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                alt=""
                className="header__logo"
            />

            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Search"  
                value={input} 
                onChange={e => setInput(e.target.value)}
                />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className="header__icons">
                    <MdNotifications size={28} />
                    <MdApps size={28} />
                    <img
                    src="https://cdn.statically.io/img/st2.depositphotos.com/5934840/11872/v/950/depositphotos_118723450-stock-illustration-boy-anime-male-manga-cartoon.jpg  "
                    alt="avatar"
                    />  

            </div>

            </div>
    )
}

export default Header