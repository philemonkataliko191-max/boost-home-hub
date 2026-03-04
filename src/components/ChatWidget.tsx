import { useState } from "react";
import { MessageSquare, Send, X, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Bienvenue sur ImmoBoost AI ! 👋 Comment puis-je vous aider ?",
    sender: "bot",
    time: "Maintenant",
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
      time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: "Merci pour votre message ! Un agent ImmoBoost vous répondra sous peu. 🏠",
        sender: "bot",
        time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-elevated hover:scale-110 transition-transform duration-200"
        aria-label="Ouvrir le chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-elevated overflow-hidden flex flex-col" style={{ height: "480px" }}>
          {/* Header */}
          <div className="bg-primary p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold text-sm font-sans">ImmoBoost AI</h4>
              <p className="text-primary-foreground/70 text-xs">En ligne • Répond instantanément</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex items-end gap-2 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "bot" ? "bg-accent/20" : "bg-primary/10"}`}>
                    {msg.sender === "bot" ? <Bot className="h-3 w-3 text-accent" /> : <User className="h-3 w-3 text-primary" />}
                  </div>
                  <div>
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-card text-foreground shadow-card rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-1 block px-1">{msg.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border bg-card">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Écrivez votre message..."
                className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
