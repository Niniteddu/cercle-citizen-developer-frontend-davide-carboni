type IcebreakerPromptProps = {
  prompt: string
}

function IcebreakerPrompt({ prompt }: IcebreakerPromptProps) {
  return <blockquote className="icebreaker-prompt">{prompt}</blockquote>
}

export default IcebreakerPrompt