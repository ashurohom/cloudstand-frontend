import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageSquare, Send, Sparkles, X } from 'lucide-react'
import { chatbotQuickPrompts, chatbotWelcomeMessage, getChatbotReply } from '../../data/chatbot'

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([chatbotWelcomeMessage])
  const endRef = useRef(null)
  const messageIdRef = useRef(0)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const sendMessage = async (rawMessage) => {
    const trimmed = rawMessage.trim()

    if (!trimmed || isTyping) {
      return
    }

    messageIdRef.current += 1
    const userMessage = {
      id: `user-${messageIdRef.current}`,
      role: 'user',
      text: trimmed,
    }

    const currentMessages = [...messages, userMessage]
    setMessages(currentMessages)
    setInput('')
    setIsTyping(true)

    try {
      const replyText = await getChatbotReply(trimmed, currentMessages)
      messageIdRef.current += 1
      const assistantMessage = {
        id: `assistant-${messageIdRef.current}`,
        role: 'assistant',
        text: replyText,
      }
      setMessages((current) => [...current, assistantMessage])
    } catch (error) {
      console.error(error)
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] flex items-end gap-3">


        <button
          aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
          className="button-ring inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border border-[#0EA5E9] bg-[#0EA5E9] text-white shadow-[0_18px_36px_rgba(14,165,233,0.22)] transition hover:scale-[1.02]"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-4 left-4 md:left-auto md:right-6 md:bottom-28 z-[999] flex h-[calc(100dvh-110px)] md:h-[calc(100dvh-140px)] max-h-[600px] md:max-h-[560px] md:w-[420px] flex-col overflow-hidden rounded-[24px] md:rounded-[30px] border border-[#d7e5ff] bg-white shadow-[0_24px_60px_rgba(24,67,148,0.18)]"
          >
            <div className="bg-gradient-to-r from-[#0b6bff] via-[#276eff] to-[#4c88ff] p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <Bot className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2 font-semibold">
                      Assist
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <p className="mt-1 text-sm text-blue-50">
                      Your intelligent assistant for Oracle Cloud consulting, implementations, and services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-[#f7fbff] px-4 py-4">
              <div className="mb-4 flex flex-wrap gap-2">
                {chatbotQuickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    className="rounded-full border border-[#d7e5ff] bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-accent/40 hover:text-accent"
                    onClick={() => sendMessage(prompt)}
                    type="button"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] whitespace-pre-wrap rounded-3xl px-4 py-3 text-sm leading-7 ${
                        message.role === 'user'
                          ? 'rounded-br-md bg-accent text-white'
                          : 'rounded-bl-md border border-[#d7e5ff] bg-white text-slate-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}

                {isTyping ? (
                  <div className="flex justify-start">
                    <div className="rounded-3xl rounded-bl-md border border-[#d7e5ff] bg-white px-4 py-3 text-sm text-text-muted">
                      Thinking...
                    </div>
                  </div>
                ) : null}

                <div ref={endRef} />
              </div>
            </div>

            <form
              className="border-t border-[#d7e5ff] bg-white p-4"
              onSubmit={(event) => {
                event.preventDefault()
                sendMessage(input)
              }}
            >
              <div className="flex gap-3">
                <input
                  aria-label="Ask the AI assistant"
                  className="w-full rounded-full border border-[#d7e5ff] bg-[#f7fbff] px-4 py-3 text-sm text-slate-900 placeholder:text-text-muted focus:border-accent focus:outline-none"
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about AI use cases, ROI, or automation ideas..."
                  value={input}
                />
                <button
                  aria-label="Send message"
                  className="button-ring inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={!input.trim() || isTyping}
                  type="submit"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default AIChatbot
