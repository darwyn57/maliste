import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './Firebase-config';
import { collection, getDoc, addDoc, deleteDoc, updateDoc, doc, getDocs } from 'firebase/firestore';




const Users = () => {

    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState(0)
    const [users, setUsers] = useState([])

    const usersCollectionRef = collection(db, "users");
    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
        getUsers();
    }
    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id)
        const newFields = { age: age + 1 }
        await updateDoc(userDoc, newFields)
        getUsers();
    };
    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc)
        getUsers();
    }

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(data);
    };
    useEffect(() => {
        getUsers();

    }, []);

    return (
        <div class="mt-4">
            <h1>Sing-up Users</h1>
            <form>
                <input type="text" placeholder='Name...' onChange={(event) => {
                    setNewName(event.target.value);
                }} /><br></br>
                <input type="number" placeholder='Age...' onChange={(event) => {
                    setNewAge(event.target.value)
                }} /><br></br>
                <button onClick={createUser}>Create User</button>
                {users.map((user) => {
                    return (
                        <div>
                            {""}
                            <h1>users</h1>
                            <hr></hr>
                            <h1>Name : {user.name}</h1>
                            <h1>Age : {user.age}</h1>
                            <button onClick={() => { updateUser(user.id, user.age) }}>Update User</button>
                            <button onClick={() => { deleteUser(user.id) }}>Delete User</button>
                        </div>
                    )
                })}
            </form>
        </div>

    );
};

export default Users;