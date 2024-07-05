import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hi,Welcome to Book Inventory,Your ultimate destination for discovering your dream home. Whether you're searching for a cozy apartment in the city, a spacious family house in the suburbs, or an investment property, we have it all. if you have any query TYPE:-➡ 𝐈 𝐡𝐚𝐯𝐞 𝐚 𝐐𝐮𝐞𝐫𝐲")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config