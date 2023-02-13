import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Protected(props)
{
    let Cmp = props.Cmp;
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            navigate('/login');
        }
    }, []);
    const navigate = useNavigate();
    return(
        <div>
            <Cmp />
        </div>
        )
}