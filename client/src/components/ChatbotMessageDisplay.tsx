interface ChatbotMessageDisplayProps {
  message: string;
}

export default function ChatbotMessageDisplay({
  message,
}: ChatbotMessageDisplayProps): JSX.Element {
  return <div>{message}</div>;
}
