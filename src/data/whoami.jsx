import { FaPaintBrush } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineCamera } from 'react-icons/ai';

export default [
    {
        key: 'graphicdesigner',
        title: 'Graphic Designer',
        icon: <FaPaintBrush className='w-full h-full ' />,
        description: 'Check out my Behance!',
    },
    {
        key: 'front-end',
        title: 'Front-End Web Developer',
        icon: <BsCodeSlash className='w-full h-full' />,
        description: 'Check out my Github!',
    },
    {
        key: 'photographer',
        title: 'Photographer',
        icon: <AiOutlineCamera className='w-full h-full' />,
        description: 'Check out my Instagram!',
    }
    
]