import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import SocketIOClient from 'socket.io-client';
import useStyle from "./styles";
import Grid from "@material-ui/core/Grid";
import SettingsIcon from '@material-ui/icons/Settings';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CallIcon from '@material-ui/icons/Call';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {ButtonBase, IconButton, useMediaQuery, useTheme} from "@material-ui/core";
import classNames from 'classnames';
import CheckIcon from '@material-ui/icons/Check';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import {useLayoutState} from "../../context/LayoutContext";
import moment from 'jalali-moment'


const Chat = (props) => {
    const classes = useStyle();
    const scrollableMessages = useRef();
    const scrollableConversations = useRef();
    const socket = React.useRef(SocketIOClient("https://divar-api.herokuapp.com"));
    const [messages, setMessages] = React.useState([]);
    const [conversations,setConversations]=  React.useState([]);
    const [newMessage, setNewMessage] = React.useState([]);
    const [postTitle, setPostTitle] = React.useState('');
    const [postUser, setPostUser] = React.useState('');
    const [postId, setPostId] = React.useState('');
    const [currentConversation, setCurrentConversation] = React.useState('');
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [typing,setTyping] = React.useState(false);
    const [onlineUsers,setOnlineUsers] = React.useState([]);
    const [online,setOnline] = React.useState(false);
    const [oldMessages,setOldMessages] = React.useState({});
    const [hasUnreadConversation,setHasUnreadConversation] = React.useState(null);
    const localUserId = localStorage.getItem("id");
    const theme= useTheme();
    const isMobileSize= useMediaQuery(theme.breakpoints.down(768));
    const {selectedCity} = useLayoutState();

    useEffect(() => {
            socket.current.emit("joinUser",  {
                "user": localUserId,
            });
    },[]);
    useEffect(() => {
        if(props.match.params.id) {
            socket.current.emit("newConversation", {
                "userId": localUserId,
                "paramsId": props.match.params.id,
            });
        }
        socket.current.on("showConversation", (conversation) => {
            if(!conversation._id)
            {
                setConversations(conversations => conversations.concat(conversation));
            }
            handleShowConversation(conversation);
        });

    },[props.match.params.id]);
     useEffect(() => {
         socket.current.on("showLoadOldMessages", async (data) => {
            setOldMessages(data);
         });
     },[]);
     useEffect(() => {
        if(oldMessages && currentConversation)
        {
            if(oldMessages.user === localUserId){
                 setPostId(oldMessages.conversation.post._id);
                 setPostUser(oldMessages.conversation.post.user);
                 setPostTitle(oldMessages.conversation.post.title);
                 setMessages(oldMessages.conversation.messages);
                 setCurrentConversation(oldMessages.conversation);
            }
            if(oldMessages.user !== localUserId)
            {
                if(currentConversation._id === oldMessages.conversation._id)
                {
                     setPostId(oldMessages.conversation.post._id);
                     setPostUser(oldMessages.conversation.post.user);
                     setPostTitle(oldMessages.conversation.post.title);
                     setMessages(oldMessages.conversation.messages);
                     setCurrentConversation(oldMessages.conversation)
                }
            }
        }

     },[oldMessages])

    useEffect( () => {
            socket.current.on("showOnlineUsers",(users) => {
                setOnlineUsers(users);
            } )
    });
    useEffect( () => {
        socket.current.on("showIsTyping", (sender) => {
            if (sender.writer !== localUserId) {
                    setTyping(true);
                    setTimeout(isTypingTimeout, 5000);
            }
        })
    });

    useEffect(() => {
        socket.current.emit("loadOldConversations", {
            "id": localUserId,
        });
        socket.current.on("showLoadOldConversations", async (data) => {
            await setConversations(data.conversations);
        });

    },[]);

    useEffect(() => {
        if(hasUnreadConversation){
            socket.current.emit("loadOldConversations", {
                "id": localUserId,
            });
            socket.current.on("showLoadOldConversations", async (data) => {
                await setConversations(data.conversations);
            });
        }
    },[hasUnreadConversation]);

    useEffect(() => {
              socket.current.on("showNewMessage", (message) => {
                  setArrivalMessage(message);
              });
    },[]);
    useEffect(() => {
        if(arrivalMessage){
            if(currentConversation && !currentConversation._id)
            {
                setMessages(messages => messages.concat(arrivalMessage));
                setConversations(conversations => [...conversations.slice(0,conversations.length-1)]);
                setConversations(conversations => conversations.concat(arrivalMessage.conversation));
                setCurrentConversation(arrivalMessage.conversation);
            }
            if(currentConversation._id === arrivalMessage.conversation._id)
            {
                if(arrivalMessage.recipient === localUserId){
                    socket.current.emit("seenMessage", {
                        "message":arrivalMessage
                    });
                    setHasUnreadConversation(arrivalMessage.conversation);
                }
                else
                {
                    setMessages(messages => messages.concat(arrivalMessage));
                }
            }
            else
                setHasUnreadConversation(arrivalMessage.conversation);


        }
        setArrivalMessage("");
    }, [arrivalMessage, currentConversation]);
    useEffect(() => {
        socket.current.on("showSeenMessage",(data) => {
            if(data.message.sender === localUserId){
                const messagesLength = messages.length;
                setMessages(messages => [...messages.slice(0,messagesLength-1)]);
                setMessages(messages => messages.concat(data.message));
            }
            else
                if(data.message.recipient === localUserId)
            {
                setMessages(messages => messages.concat(data.message));
            }
        });
    },[])
    useEffect(() => {
        if(scrollableMessages.current)
            scrollableMessages.current.scroll(0, scrollableMessages.current.scrollHeight);
    }, [messages]);

    useEffect(() => {
        if(scrollableConversations.current)
            scrollableConversations.current.scroll(0, scrollableConversations.current.scrollHeight);
    }, [JSON.stringify(conversations)]);

    useEffect(() => {
        if(currentConversation) {
            setOnline(false);
            if(currentConversation.user._id === localUserId){
                let onlineUser =onlineUsers.find( user => user.userId === currentConversation.contact._id);
                if(onlineUser)
                    setOnline(true);
            }
            if(currentConversation.contact._id === localUserId){
                let onlineUser =onlineUsers.find( user => user.userId === currentConversation.user._id);
                if(onlineUser)
                    setOnline(true);
            }
        }
    }, [currentConversation]);


    const handleShowConversation = (conversation) => {
        let paramsId= conversation.post._id;
        if(conversation.contact._id === localUserId)
             paramsId = conversation.user._id;
        window.history.replaceState(null, "New Page Title", `/chat/${paramsId}`)
           // history.push({
           //     pathname:`/chat/${postId}`
           // })
         setCurrentConversation(conversation);
        if(conversation._id) {
            if(conversation.hasUnreadMessages)
                setHasUnreadConversation(conversation)
            socket.current.emit("loadOldMessages", {
                "conversation": conversation,
                "user": localUserId
            });

        }
        else{
            setPostId(conversation.post._id);
            setPostUser(conversation.post.user);
            setPostTitle(conversation.post.title);
            setMessages([]);
        }
    };
    const showMessageInput = (currentConversation) => {
        if(currentConversation!=='') {
        return <Grid item container direction={"row"} className={classes.messagesFooter} justifyContent={"center"} alignItems={"center"}>
            <Grid item container className={classes.sendIcon}><IconButton className={classes.sendIconBtn} onClick={()=>{sendMessage(currentConversation)}}><SendIcon/></IconButton></Grid>
            <textarea
                value={newMessage} onChange={e => setNewMessage(e.target.value)}
                onKeyDown={(event) => {_handleKeyDown(event,currentConversation)}}
                className={classes.chatBoxInput} placeholder="یک پیام بنویسید..." />
            <Grid item container className={classes.attachIcon}><IconButton><AttachFileIcon/></IconButton></Grid>
        </Grid>
            }
    };
    const sendMessage = (conversation) => {
        if (!newMessage)
            return;
       if(conversation._id){
           let recipient='';
           if(localUserId===conversation.contact._id) {
               recipient = conversation.user._id;
           }
           else {
               recipient = conversation.contact._id;
           }
           socket.current.emit("newMessage", {
               "text": newMessage,
               "sender":localUserId,
               "recipient": recipient,
               "postId":  conversation.post._id,
               "time": new Date(),
               "conversationContactId": conversation.contact._id,
               "conversation":conversation._id,
               });
       }
       else{
           socket.current.emit("newMessage", {
               "text": newMessage,
               "sender":localUserId,
               "recipient": postUser._id,
               "postId":  postId,
               "time": new Date(),
               "conversationContactId": postUser._id,
               "conversation":''
           });
       }
        setNewMessage("");
    }
    const _handleKeyDown = (event,currentConversation) => {
        socket.current.emit("isTyping",{
            writer: localUserId,
        });
        if (event.key === 'Enter') {
            sendMessage(currentConversation);
            event.preventDefault();
        }
    };
    const isTyping = () => {
        if(typing)
                return  <Grid item container style={{flex:1}} justifyContent={"center"} className={classes.conversationStatus} >در حال نوشتن...</Grid>
    }
    const getStatus = () => {
        if(online)
              return <Grid item container style={{flex: 1}} justifyContent={"center"}
                                 className={classes.conversationStatus}>آنلاین</Grid>
        else  return  <Grid item container style={{flex:1}} justifyContent={"center"} className={classes.conversationStatus} >آفلاین</Grid>

    };
    const isTypingTimeout = () => {
        setTyping(false);
    };
  const isSeen = (sender,seen) => {
      if((localUserId === sender) && seen === true )
        return <DoneAllIcon style={{fontSize:12}}/>
      else
          if ((localUserId === sender) && seen === false)
         return <CheckIcon style={{fontSize:12}}/>
  }
    const unreadMessages = (hasUnreadMessages) => {
        if(hasUnreadMessages){
          return  <span className={classes.newMessageStatus}>(پیام جدید)</span>
      }
    }
    const showConversationDetails = (conversation) => {
      if(conversation.user._id === localUserId)
         return conversation.contact.phoneNumber
        else
        return conversation.user.phoneNumber
    };
    const prettyDate = (time) => {
        const date = new Date(time);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return (hours + ":" + minutes);

    };
    const showConversations = () => {
      if(!isMobileSize || (isMobileSize  && window.location.pathname.startsWith("/chat") && window.location.pathname.length <= 6))
          return <Grid item container direction={"column"} className={classes.conversationList} >
              <Grid item container direction={"row"} className={classes.conversationListHeader} justifyContent={"center"} alignItems={"center"}>
                  <Grid item container className={classes.chatSetting} justifyContent={"center"}><SettingsIcon/></Grid>
                  <Grid item container className={classes.chatTitle}>چت دیوار</Grid>
                  {isMobileSize && <Link to={ "/" + selectedCity}>
                      <Grid item >
                          <img width={48} height={48} className={classes.logo} src={"/images/logo.png"} alt={"divar logo"}/>
                      </Grid>
                  </Link>}
              </Grid>
              <Grid item container direction={"column"} className={classes.conversationListBody} ref={scrollableConversations} justifyContent={"flex-start"}>
                  <Grid item container direction={"column"}>
                      {conversations.map((conversation) => {
                          return  <ButtonBase onClick={() =>{handleShowConversation(conversation)}} style={{width:"100%"}}>
                              <div className={classNames(classes.conversationItem,
                                  conversation._id === currentConversation._id && classes.conversationItemActive)}>
                                  <div className={classes.conversationItemImage}>
                                      <img src={`https://divarapi.s3.ir-thr-at1.arvanstorage.com/${conversation.post.images[0]}`} alt={conversation.post.title} style={{width:'100%',height: '100%'}} />
                                  </div>
                                  {unreadMessages(conversation.hasUnreadMessages)}
                                  <div className={classes.conversationItemTitle}>{conversation.post.title}</div>
                                  <div className={classes.conversationItemContact}>{showConversationDetails(conversation)}</div>
                                  <div className={classes.conversationItemSummary}></div>
                              </div>
                          </ButtonBase>
                      })}
                  </Grid>
              </Grid>
              <Grid item container direction={"row"} className={classes.conversationListFooter} justifyContent={"center"}></Grid>
          </Grid>

    }
    const showMessagesContainer = () => {
        if(!isMobileSize || (isMobileSize  && window.location.pathname.startsWith("/chat") && window.location.pathname.length > 6))
          return  <Grid item container direction={"column"} className={classes.messagesContainer}>
              <Grid item container direction={"row"} className={classes.messagesHeader} justifyContent={"center"} alignItems={"center"}>
                  {isMobileSize && <Grid item container style={{width:35}} justifyContent={"flex-end"}><CallIcon/></Grid>}
                  {isMobileSize && <Grid item container style={{width:35}} justifyContent={"flex-end"} ><MoreVertIcon/></Grid>}
                  <Grid item container direction={"column"} className={classes.conversationTitle} justifyContent={"center"}>
                      <Grid item container style={{flex:1}} justifyContent={"center"} >{postTitle}</Grid>
                      {getStatus()}
                  </Grid>
                  {!isMobileSize && <Grid item container style={{width:35}} justifyContent={"flex-end"}><CallIcon/></Grid>}
                  {!isMobileSize && <Grid item container style={{width:35}} justifyContent={"flex-end"} ><MoreVertIcon/></Grid>}
                  {isMobileSize && <Grid item container style={{width:35}} justifyContent={"flex-end"} >
                      <Link to={"/chat"}>
                          <ArrowBackIos/>
                      </Link>
                  </Grid>}
              </Grid>
              <div className={classes.messagesBody} ref={scrollableMessages}>
              {messages.map((message,index,array) => {
                  let previousMessage = null;
                  if(index>0)
                         previousMessage = array[index - 1];
                  if ((previousMessage && (new Date(previousMessage.time).getDate() !== new Date(message.time).getDate())) || (index===0)) {
                      return <>
                          <Grid item container justifyContent={"center"}>
                              <div className={classes.dateSeparator}>{moment(message.time, 'YYYY/MM/DD').locale('fa').format('D MMMM')}</div>
                          </Grid>
                          <div className={classNames(classes.message,
                              (localUserId === message.sender) ? classes.sendMessage : classes.receivedMessage)}>
                              <div className={classes.messageText}>
                                  {message.text}
                              </div>
                              <div className={classes.messageTime}>
                                  {isSeen(message.sender, message.seen)}
                                  <span>{prettyDate(message.time)}</span>
                              </div>
                          </div>
                      </>
                  }
                  else{
                      return <div className={classNames(classes.message,
                          (localUserId === message.sender) ? classes.sendMessage : classes.receivedMessage)}>
                          <div className={classes.messageText}>
                              {message.text}
                          </div>
                          <div className={classes.messageTime}>
                              {isSeen(message.sender, message.seen)}
                              <span>{prettyDate(message.time)}</span>
                          </div>
                      </div>
              }
              })}
          </div>
              {showMessageInput(currentConversation)}
          </Grid>
    }
    return (
        <Grid container className={classes.chat} justifyContent={"center"}>
            {showConversations()}
            {showMessagesContainer()}
        </Grid>

    );
};

export default Chat;