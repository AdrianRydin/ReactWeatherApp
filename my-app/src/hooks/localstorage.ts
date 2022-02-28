import {useEffect, useState} from "react";


export function LSState<S>(defaultState: S, key: string) {
    const currentState = localStorage[key] ? JSON.parse(localStorage[key]) as S : defaultState
    const [state, setState] = useState(currentState)

    useEffect(() => {
        localStorage[key] = JSON.stringify(state)
    }, [state, key])

    return[state, setState] as const
}