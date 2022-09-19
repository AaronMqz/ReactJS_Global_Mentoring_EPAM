import React, { useState, useEffect } from "react";
import { Results } from "./react_component";
import { Title } from "./react_pure_component";

export const HomeTask1 = () => {
    const [list, setList] = useState([]);
    const [results, setResults] = useState([]);
    const [text, setText] = useState('');

    const add = () => {
        if (text !== '') {
            setList(list => [...list, text]);
            setText('');
        }
    }

    useEffect(() => {
        if (text !== '') {
            const res = list.filter((element) => {
                return element.includes(text)
            })
            setResults(res);
        } else {
            setResults(list);
        }

    }, [text])

    useEffect(() => {
        setResults(list);
    }, [list])

    return (
        <>
            <section>
                <Title />
                <div>
                    <input
                        type="text"
                        placeholder="Filter or add new element"
                        onChange={(e) => setText(e.target.value)}
                        value={text} />
                    <button onClick={() => add()}>Add</button>
                </div>
                <div>
                    <Results filter={results} />
                </div>
            </section>
        </>
    )
}