import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsPinterest } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <ul className='flex gap-3 justify-center'>
      <li>
        <a className='text-slate-100 text-2xl cursor-pointer hover:text-LimeGreen' href='#1' aria-label='facebook'><AiFillFacebook /></a>
      </li>
      <li>
        <a className='text-slate-100 text-2xl cursor-pointer hover:text-LimeGreen' aria-label='Youtube' href='#2'><AiFillYoutube /></a>
      </li>
      <li>
        <a className='text-slate-100 text-2xl cursor-pointer hover:text-LimeGreen' aria-label='Twitter' href='#3'><BsTwitter /></a>
      </li>
      <li>
        <a className='text-slate-100 text-2xl cursor-pointer hover:text-LimeGreen' aria-label='Pinterest' href='#4'><BsPinterest /></a>
      </li>
      <li>
        <a className='text-slate-100 text-2xl cursor-pointer hover:text-LimeGreen' aria-label='Instagram' href='#5'><GrInstagram /></a>
      </li>
    </ul>
  )
}

export default SocialIcons