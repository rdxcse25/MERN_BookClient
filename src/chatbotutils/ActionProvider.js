class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
        const greetingMessage = this.createChatBotMessage("if you have a query related to the website mail to-princerituraj20@gmail.com else TYPE:➡ OTHER PROBLEM ");
        this.updateChatbotState(greetingMessage);
      }
    
      // New actions
    
      // Action to handle questions about the weather
      handleWeather() {
        const message = this.createChatBotMessage("I want to know about the webpage>>TYPE>> about ||| I want to add an account to the webpage>>TYPE>>acc ||| I want to to know about the website developers>>TYPE>>jod" );

        this.updateChatbotState(message);
      }
    
      // Action to provide help or assistance
      handleHelp() {
        const message = this.createChatBotMessage("Book Inventory is a comprehensive online Book store and inventory platform designed to facilitate seamless transactions between book owners looking to sell their books and prospective buyers seeking their dream books. ");
        this.updateChatbotState(message);
      }
    
      // Action to handle user feedback
      handleFeedback() {
        const message = this.createChatBotMessage("The developer of this website is Jod Rituraj Debnath");
        this.updateChatbotState(message);
      }
    
      // Action to handle unknown commands
      handleUnknown() {
        const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Can you please rephrase?");
        this.updateChatbotState(message);
      }

      handleAccount(){
        const message = this.createChatBotMessage("Buy and Sell Your Book with Ease on Book Inventory!  Sign Up: Get started by creating your account on Book Inventory. Simply sign up with your email address and set a secure password. List Your Book:   Fill in the required details about your book, including type (name, picture, pdf, etc.),  size, amenities, pricing, and upload high-quality images. Provide comprehensive information to attract potential buyers and showcase the unique features of your book. Reach a Wide Audience:  Once listed, your book will be visible to our vast network of potential buyers.  Benefit from our platform's reach and exposure to connect with interested buyers looking for properties like yours. Manage Your Listings: Easily manage and update your property listings through your account dashboard. Monitor inquiries, schedule property viewings, and stay informed about potential offers."
         );
        this.updateChatbotState(message);
      }

    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider