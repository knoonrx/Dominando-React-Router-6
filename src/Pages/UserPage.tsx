import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';

interface UserData {
    name: {
        first: string;
        last: string;
    };
    email: string;
    picture: {
        thumbnail: string;
    }
}

interface ResultsUserData {
    results: UserData[];
}

const fetchUserData = async () => {
    const {data} = await axios.get<ResultsUserData>('https://randomuser.me/api/');
    return data.results?.[0];
}

const UserPage = () => {
    const [userData, setUserData] = useState<UserData>({} as UserData)

    const doFetchUserData = useRef(() => {
    });

    doFetchUserData.current = () => {
        fetchUserData().then(x => setUserData(x))
    }

    useEffect(() => {
        doFetchUserData.current()
    }, [doFetchUserData]);

    if (!userData) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>** React App **</h1>
            <img width={100} src={userData?.picture?.thumbnail} alt=""/>
            <ul style={{listStyle: 'none'}}>
                <li>Name: {userData?.name?.first} {userData?.name?.last} </li>
                <li>email: {userData?.email}</li>
            </ul>
        </>
    );
}

export default UserPage;
