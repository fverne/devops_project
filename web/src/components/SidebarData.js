import React from "react"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as GoIcons from 'react-icons/go';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Courses',
        path: '/courses',
        icon: <AiIcons.AiOutlineTeam />,
        className: 'nav-text'
    },
    {
        title: 'Assignments',
        path: '/assignments',
        icon: <IoIcons.IoIosPaper />,
        className: 'nav-text'
    },
    {
        title: 'Content',
        path: '/content',
        icon: <MdIcons.MdContentCopy />,
        className: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <GoIcons.GoCalendar />,
        className: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <BiIcons.BiSupport />,
        className: 'nav-text'
    },
]