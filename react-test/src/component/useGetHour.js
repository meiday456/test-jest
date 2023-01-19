import {useEffect, useState} from "react";


export default function useGetHour(){

    const [hour , setHour] = useState(new Date().getHours())

    useEffect(() => {
        console.log('언제 수행하는가?')
        return () => {
        };
    });

    return hour
}