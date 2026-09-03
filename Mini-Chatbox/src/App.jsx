import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    sender: "Shivam",
    avatar: "🧑",
    text: "Hey everyone!👋 kya haal chal?",
    color: "bg-blue-500",
  },
  {
    id: 2,
    sender: "Sam",
    avatar: "👩",
    text: "Hey Shivam! Badhiya bro, Kaha hai aajkal?",
    color: "bg-purple-500",
  },
  {
    id: 1,
    sender: "Shivam",
    avatar: "🧑",
    text: "bhas Sam bro, ek AI Bot banaya hai yarr, use test kar rha hu dekhega?",
    color: "bg-blue-500",
  },
  {
    id: 3,
    sender: "AI Bot",
    avatar: "🤖",
    text: "I'm helping everyone with their questions!",
    color: "bg-green-500",
  },
  {
    id: 4,
    sender: "Vikas",
    avatar: "👨",
    text: "are wow!",
    color: "bg-orange-500",
  },
  {
    id: 5,
    sender: "Shivam",
    avatar: "🧑",
    text: "hello vikas",
    color: "bg-blue-500",
  },
  {
    id: 6,
    sender: "Vikas",
    avatar: "👨",
    text: "hello, hello bhai kya bindas bot banaya hai",
    color: "bg-orange-500",
  },
];

export default function ChatBox() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "You",
      avatar: "🙂",
      text: input,
      color: "bg-blue-600",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Fake bot reply
    setTimeout(() => {
      const reply = [
        "Hi! 👋",
        "Yeah, I get what you mean.",
        "Oh, that's interesting! 👀",
        "Hmm, that's a good point.",
        "Absolutely! Tell me more.",
        "Haha, that's pretty cool! 😄",
        "Oh really? That's interesting.",
        "Yeah, that makes sense.",
        "Interesting... I'd like to hear more.",
        "I see what you mean. 🤔",
        "That sounds good!",
        "Oh, I didn't think about it that way.",
        "That's actually interesting.",
        "Yeah, I understand.",
        "Fair enough! 😄",
        "I get it.",
        "That's a good one!",
        "Hmm, you might be onto something.",
        "Oh wow, that's interesting!",
        "Yeah, why not? 😎",
        "I hadn't thought of that before.",
        "That makes sense to me.",
        "Haha, I like that! 😂",
        "Good point!",
        "That's something worth thinking about.",
        "I see where you're coming from.",
        "Sounds interesting! Tell me more.",
        "Yeah, that's pretty cool.",
        "Hmm, interesting choice. 👀",
        "I like where this is going! 😄",
      ];

      const botMessage = {
        id: Date.now() + 1,
        sender: "AI Bot",
        avatar: "🤖",
        text: reply[Math.floor(Math.random() * reply.length)],
        color: "bg-green-500",
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="mx-auto flex h-150 w-full max-w-md flex-col overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
      {/* Header */}
      <div className="bg-gray-900 px-5 py-4 text-white">
        <h2 className="text-lg font-semibold">Group Chat</h2>
        <p className="text-sm text-gray-400">4 people online</p>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.sender === "You" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${message.color}`}
            >
              {message.avatar}
            </div>

            {/* Message */}
            <div
              className={`max-w-[75%] ${
                message.sender === "You" ? "text-right" : "text-left"
              }`}
            >
              <p className="mb-1 text-xs font-medium text-gray-500">
                {message.sender}
              </p>

              <div
                className={`rounded-2xl px-4 py-2 ${
                  message.sender === "You"
                    ? "rounded-tr-sm bg-blue-600 text-white"
                    : "rounded-tl-sm bg-white text-gray-800 shadow-sm"
                }`}
              >
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2 border-t bg-white p-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Type a message..."
          className="flex-1 rounded-xl border border-gray-200 px-4 py-2 outline-none focus:border-blue-500"
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
