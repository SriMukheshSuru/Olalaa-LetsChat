import {createContext , useContext ,useState,useEffect} from 'react'
import {useHistory} from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const [chats, setChats] = useState([])
    const [notification, setNotification] = useState([]);
    const history = useHistory(null);

    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo);
      console.log(user)
      if(!userInfo ){
        if(history!==undefined)
       history.push ("/")
        
      }
    }, [history]);
    

    return  <ChatContext.Provider value = {{user ,setUser,selectedChat, setSelectedChat,chats, setChats ,notification, setNotification}}>
                {children}
            </ChatContext.Provider>
};

export const ChatState = () => {
    return useContext(ChatContext);
};


export default ChatProvider;