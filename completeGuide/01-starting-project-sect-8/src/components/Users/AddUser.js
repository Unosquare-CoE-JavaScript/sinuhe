import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import styles from './AddUser.module.css';

import { useState, useRef } from 'react';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title:'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }

        if (Number.parseInt(enteredUserAge) < 1) {
            setError({
                title:'Invalid input',
                message: 'Please enter a valid age (greater than 0)'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        // setEnteredUserName('');
        // setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            ></ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;