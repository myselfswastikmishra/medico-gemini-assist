
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send, User, BriefcaseMedical, Loader2, Upload, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

// Types for the assistant
type Message = {
  role: "user" | "assistant";
  content: string;
  fileUrl?: string;
};

export function GeminiAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! 👋 I'm your AI medical assistant. How can I help you today? Please note that I'm here to provide information, but not medical diagnosis or treatment."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzingFile, setIsAnalyzingFile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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
    if (!input.trim() && !selectedFile) return;

    // Add user message
    const userMessage: Message = { 
      role: "user", 
      content: input || (selectedFile ? `Uploaded file: ${selectedFile.name}` : "")
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      let prompt = input;
      
      // If we have a file, read it and process separately
      if (selectedFile) {
        const fileContent = await readFileAsText(selectedFile);
        prompt = `${input ? input + "\n\n" : ""}I'm sharing a medical report. Please analyze it, provide a summary, and explain any medical terms in simple language:\n\n${fileContent}`;
      }

      // Call Gemini API with updated version
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful medical assistant AI. You provide information about medical topics, but always clarify that you're not providing medical advice or diagnosis. Respond to the following query in a helpful, accurate, and compassionate way, focusing on medical information. Keep your responses concise and professional. Use 1-2 relevant emojis in your response but don't overdo it. Avoid using asterisks (*) for emphasis or bullet points: ${prompt}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 800,
          }
        })
      });

      const data = await response.json();
      
      // Handle Gemini API response
      if (data.candidates && data.candidates[0]?.content?.parts?.length > 0) {
        const assistantReply = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { role: "assistant", content: assistantReply }]);
      } else if (data.error) {
        // Handle API error or empty response
        console.error("Gemini API error:", data.error);
        toast({
          title: "Error",
          description: `API Error: ${data.error.message || "Failed to get response"}`,
          variant: "destructive"
        });
        setMessages(prev => [
          ...prev, 
          { 
            role: "assistant", 
            content: `I'm sorry, I couldn't process your request. Error: ${data.error.message || "Unknown error"}. Please try again later. 🙁` 
          }
        ]);
      } else {
        // Generic error
        setMessages(prev => [
          ...prev, 
          { 
            role: "assistant", 
            content: "I'm sorry, I couldn't process your request at the moment. Please try again later. 🙁" 
          }
        ]);
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      toast({
        title: "Error",
        description: "Failed to connect to the Gemini API. Please try again.",
        variant: "destructive"
      });
      setMessages(prev => [
        ...prev, 
        { 
          role: "assistant", 
          content: "I'm sorry, there was an error processing your request. Please try again later. 🙁" 
        }
      ]);
    } finally {
      setIsLoading(false);
      setSelectedFile(null);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      toast({
        title: "File Selected",
        description: `${file.name} ready for analysis.`,
      });
    }
  };

  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          resolve(e.target.result);
        } else {
          reject(new Error("Failed to read file"));
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    });
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
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
              Ask health-related questions and get instant, reliable information. Upload medical reports for analysis.
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
                    {message.fileUrl && (
                      <div className="mt-2">
                        <a href={message.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline flex items-center gap-1">
                          <FileText size={16} /> View uploaded file
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <div className="flex w-full items-center gap-2">
              <Button 
                type="button" 
                variant="outline" 
                size="icon" 
                onClick={triggerFileInput} 
                className="flex-shrink-0"
                disabled={isLoading || isAnalyzingFile}
              >
                <Upload className="h-4 w-4" />
                <span className="sr-only">Upload file</span>
              </Button>
              <Input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileSelect} 
                className="hidden" 
                accept=".txt,.pdf,.doc,.docx,.csv"
              />
              {selectedFile && (
                <div className="text-xs text-muted-foreground mr-2 flex-shrink-0">
                  {selectedFile.name}
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                <Textarea
                  placeholder="Ask a health question or upload a medical report..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1"
                  disabled={isLoading || isAnalyzingFile}
                />
                <Button type="submit" size="icon" disabled={isLoading || isAnalyzingFile || (!input.trim() && !selectedFile)}>
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </form>
            </div>
            <div className="w-full text-xs text-muted-foreground text-left">
              {selectedFile && <span>File ready: {selectedFile.name}</span>}
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
