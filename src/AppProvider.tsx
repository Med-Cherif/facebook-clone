import { useContext, createContext, useState } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }: { children: JSX.Element }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [onlineContactVisible, setOnlineContactVisible] = useState(false);

    const toggleSidebar = () => {
        setOnlineContactVisible(false);
        setSidebarVisible(prev => !prev);
    }

    const toggleOnlineContact = () => {
        setSidebarVisible(false);
        setOnlineContactVisible(prev => !prev)
    }

    return (
        <AppContext.Provider value={{
            sidebarVisible,
            toggleSidebar,
            onlineContactVisible,
            toggleOnlineContact
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

interface GlobalState {
    sidebarVisible: boolean;
    onlineContactVisible: boolean;
    toggleOnlineContact: () => void;
    toggleSidebar: () => void
}

export const useGlobalState = () => {
    return useContext(AppContext) as GlobalState
}