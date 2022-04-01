import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: Boolean;
}

//A ErrorBoundry that gives an error when something isn't working
export default class ErrorBoundary extends React.Component<Props, State> {
    state: State = {
        hasError: false
    }

    static getDerivedStateFromError(_:ErrorBoundary): State {
        return { hasError: true };
    }

    render() {
       if (this.state.hasError) {
        return <p>Something went wrong!</p>
       }  
       return this.props.children;
    }
}

