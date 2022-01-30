import React, { useState, useEffect, useRef } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { FiRefreshCcw } from 'react-icons/fi';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>

                    <input
                        className='todo-input edit'
                        type="text"
                        placeholder='update your item'
                        value={input}
                        name='text'
                        onChange={handleChange}
                        ref={inputRef}
                    />

                    <button className='todo-button edit'> <FiRefreshCcw className='update-icon' /> </button>

                </>)
                :
                (
                    <>
                        <input
                            className='todo-input'
                            type="text"
                            placeholder='add a todo'
                            value={input}
                            name='text'
                            onChange={handleChange}
                            ref={inputRef}
                            maxLength={40}
                        />
                        <button className='todo-button'>
                            <MdAddCircle></MdAddCircle>
                        </button>


                    </>
                )


            }

        </form>
    );
}

export default TodoForm;
