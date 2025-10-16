import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Input } from "@heroui/input";
import { useState } from "react";
import { Icon } from "@iconify/react";

export const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [{ text: "Xin chào! Tôi có thể giúp gì cho bạn?", isUser: false }],
  );
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue("");

      // Simulate response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Cảm ơn bạn đã liên hệ! Đây là một chatbox demo. Trong phiên bản đầy đủ, tôi sẽ giúp bạn với các câu hỏi về kinh tế học.",
            isUser: false,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 md:w-96 h-96 flex flex-col shadow-2xl border-primary/20 z-50 animate-slide-in-left">
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary to-primary-300 text-primary-foreground rounded-t-lg">
            <h3 className="font-semibold">Trợ lý học tập</h3>
            <Button
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              size="md"
              variant="ghost"
              onClick={() => setIsOpen(false)}
            >
              <Icon icon="lucide:twitter" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                className="flex-1"
                placeholder="Nhập tin nhắn..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button
                className="bg-primary hover:bg-primary-glow"
                size="md"
                onClick={handleSend}
              >
                <Icon className="text-white" icon="lucide:send-horizontal" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Button
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-primary to-primary-300 hover:opacity-90 hover:scale-110 transition-all duration-300 z-50 animate-pulse-glow"
        size="md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon icon="lucide:message-circle" />
      </Button>
    </>
  );
};

export default Chatbox;
