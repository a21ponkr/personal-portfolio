import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3, SiJavascript } from 'react-icons/si';
import { DiReact, DiJava } from 'react-icons/di';
import {  FaPython } from 'react-icons/fa';
import { TbBrandTailwind } from 'react-icons/tb';
import { CgCPlusPlus } from 'react-icons/cg';

export default [
    {
        key: 'HTML',
        title: 'HTML',
        icon: <AiFillHtml5 className='w-full h-full' />,
    },
    {
        key: 'CSS',
        title: 'CSS',
        icon: <SiCss3 className='w-full h-full' />,
    },
    {
        key: 'JavaScript',
        title: 'JavaScript',
        icon: <SiJavascript className='w-full h-full' />,
    },
    {
        key: 'ReactJS',
        title: 'ReactJS',
        icon: <DiReact className='w-full h-full' />,
    },
    {
        key: 'python',
        title: 'Python',
        icon: <FaPython className='w-full h-full' />,
    },
    {
        key: 'tailwindcss',
        title: 'tailwindcss',
        icon: <TbBrandTailwind className='w-full h-full' />,
    },
    {
        key: 'C++',
        title: 'C++',
        icon: <CgCPlusPlus className='w-full h-full' />,
    },
    {
        key: 'Java',
        title: 'Java',
        icon: <DiJava className='w-full h-full' />,
    },
]