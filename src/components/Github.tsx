import React, {useEffect, useState} from 'react';
import s from './Github.module.css'

type SerchUserType={
    login:string
}

type SerchResult={
    items:SerchUserType[]
}



export const Github = () => {
    const [selectedUser,setSelectedUser]=useState<string | null >(null)

    useEffect(()=>{
        if(selectedUser){  //так как изначально иницал.стейт- null, то сделаем проверку
            document.title=selectedUser
        }

    },[selectedUser]); //-пустой массив значит что произойдет только одна синхронизация после отрисовки
                //но наша синхронизация должна запускаться каждый раз,когда меняеется selectedUser

    useEffect(()=>{
        if(selectedUser){  //так как изначально иницал.стейт- null, то сделаем проверку
            document.title=selectedUser
        }

    },[]);

    const users:string[]=['Dimych','Artem'];
    return (
        <div className={s.container}>
            <div>
                <div>
                    <input placeholder='search'/> <button>find</button>
                </div>
                <ul>
                    {
                       users.map(u=> <li className={selectedUser === u ? s.selected : ' '}
                            onClick={()=>{
                                setSelectedUser(u)
                                // document.title=u -------а теперь синхронизируем не через useState a через useEffect
                                   }}>
                            {u}
                        </li>)}
                </ul>
            </div>
            <div>
                <h2>Username</h2>
                <div>Details</div>
            </div>

        </div>
    );
};

