import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Input } from "@heroui/input";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { addToast } from "@heroui/toast";
const API_URL = import.meta.env.VITE_API_URL ?? "";

export const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [{ text: "Xin chào! Tôi có thể giúp gì cho bạn?", isUser: false }],
  );
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;

    setMessages([...messages, { text: userMessage, isUser: true }]);
    setInputValue("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "chat",
          message: userMessage,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessages((prev) => [...prev, { text: data.answer, isUser: false }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { text: "Đã có lỗi xảy ra. Vui lòng thử lại.", isUser: false },
        ]);
      }
    } catch {
      addToast({
        timeout: 2000,
        title: "Có lỗi",
        color: "danger",
      });
      setMessages((prev) => [
        ...prev,
        { text: "Không thể kết nối server.", isUser: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-md md:w-md h-2/4 flex flex-col shadow-2xl border-primary/20 z-50 animate-slide-in-left">
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary to-primary-300 text-primary-foreground rounded-t-lg">
            <h3 className="font-semibold">Trợ lý học tập</h3>
            <Button
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              size="md"
              variant="ghost"
              onClick={() => setIsOpen(false)}
            >
              Đóng
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
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg px-4 py-2 bg-secondary text-secondary-foreground text-sm">
                  Đang trả lời...
                </div>
              </div>
            )}
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
                className="bg-primary hover:bg-primary-glow text-white"
                disabled={loading}
                size="md"
                onClick={handleSend}
              >
                Gửi
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Button
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-primary to-primary-300 hover:opacity-90 hover:scale-110 transition-all duration-300 z-50"
        size="md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon icon="lucide:message-circle" />
      </Button>
    </>
  );
};

export default Chatbox;
