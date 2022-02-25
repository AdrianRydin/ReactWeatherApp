import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: Boolean;
}

export default class Error extends React.Component<Props, State> {
    state: State = {
        hasError: false
    }

    static getDerivedStateFromError(_:Error): State {
        return { hasError: true };
    }

    render() {
       if (this.state.hasError) {
        return <p>Kan inte hitta informationen</p>
       }  
       return this.props.children;
    }

}

