
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send, User, BriefcaseMedical, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Types for the assistant
type Message = {
  role: "user" | "assistant";
  content: string;
};

export function GeminiAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI medical assistant. How can I help you today? Please note that I'm here to provide information, but not medical diagnosis or treatment."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // API key for Gemini
  const API_KEY = "AIzaSyDo3ahg4cUTIHMNkU_NadC3cQ7OXt-D4HI";

  // Scroll to bottom of message list
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call Gemini API
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are a helpful medical assistant AI. You provide information about medical topics, but always clarify that you're not providing medical advice or diagnosis. Respond to the following query in a helpful, accurate, and compassionate way, focusing on medical information: ${input}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.length > 0) {
        const assistantReply = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { role: "assistant", content: assistantReply }]);
      } else {
        // Handle API error or empty response
        setMessages(prev => [
          ...prev, 
          { 
            role: "assistant", 
            content: "I'm sorry, I couldn't process your request at the moment. Please try again later." 
          }
        ]);
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages(prev => [
        ...prev, 
        { 
          role: "assistant", 
          content: "I'm sorry, there was an error processing your request. Please try again later." 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-medical px-3 py-1 text-sm text-primary-foreground">
              AI Medical Assistant
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Your Health Information Companion
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Ask health-related questions and get instant, reliable information
            </p>
          </div>
        </div>

        <Card className="mt-12 mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BriefcaseMedical className="h-6 w-6 text-medical" />
              Medico AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[400px] overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-3",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.role === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <BriefcaseMedical className="h-4 w-4" />
                      )}
                      <span className="font-medium">
                        {message.role === "user" ? "You" : "Medico AI"}
                      </span>
                    </div>
                    <div className="text-left whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Textarea
                placeholder="Ask a health question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
