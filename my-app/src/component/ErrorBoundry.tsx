import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: Boolean;
}


class Error extends Component<Props, State> {
    state: State = {
        hasError: false
    }
    

    static getDerivedStateFromError(_:Error): State {
        return { hasError: true };
    }

    // componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    //     console.error("errormessage:", error, errorInfo);
    // }
    

    render() {
       if (this.state.hasError) {
        return <p>Kan inte hitta informationen</p>
       }  
       return this.props.children;
    }

}

export default Error;