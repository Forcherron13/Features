import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Alert } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    // Load initial message
    const initialMessages = [
      {
        _id: 1,
        text: 'Hello! How can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Support',
        },
      },
    ];
    setMessages(initialMessages);
  }, []);

  const onSend = useCallback((newMessages: any[] = []) => {
    console.log('Sending messages:', newMessages); // Log the new messages
    if (newMessages.length > 0) {
      setMessages((previousMessages) => {
        const updatedMessages = GiftedChat.append(previousMessages, newMessages);
        console.log('Updated messages:', updatedMessages); // Log the updated messages
        return updatedMessages;
      });
    } else {
      Alert.alert('No message to send!');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1, // Replace with your user ID
        }}
        renderUsernameOnMessage={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default ChatScreen;
