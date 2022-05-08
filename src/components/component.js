import React,{useState,useEffect} from 'react';

export default function Component({i},{t1},{t2}){

    // const[id,setId]=useState('');
    // const[team1,setTeam1]=useState('');
    // const[team2,setTeam2]=useState('');

    // setId(i);
    // setTeam1(t1);
    // setTeam2(t2);

    return(

        <div>
        <table>
        <tr>
            <th>{i}</th>
            <th>{t1}</th>
            <th>{t2}</th>
        </tr>
        </table>
        </div>

    
    );

}

