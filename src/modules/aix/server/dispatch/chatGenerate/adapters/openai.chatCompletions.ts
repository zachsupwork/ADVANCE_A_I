      return 'auto';
    case 'any':
      return 'required';
    case 'function_call':
      return { type: 'function' as const, function: { name: itp.function_call.name } };
  }
}

function _toOpenAIInReferenceToText(irt: AixParts_MetaInReferenceToPart): string {
  // Get the item texts without roles
  const items = irt.referTo.map(r => r.mText);
  if (items.length === 0)
    return 'CONTEXT: The user provides no specific references.';

  const isShortItem = (text: string): boolean =>
    text.split('\n').length <= 3 && text.length <= 200;

  const formatItem = (text: string, index?: number): string => {
    if (isShortItem(text)) {
      const formatted = text.replace(/\n/g, ' ').replace(/\s+/g, ' ');
      return index !== undefined ? `${index + 1}. "${formatted}"` : `"${formatted}"`;
    }
    return `${index !== undefined ? `ITEM ${index + 1}:\n` : ''}---\n${text}\n---`;
  };

  // Formerly: `The user is referring to this in particular:\n{{ReplyToText}}`.replace('{{ReplyToText}}', part.replyTo);
  if (items.length === 1)
    return `CONTEXT: The user is referring to this in particular:\n${formatItem(items[0])}`;

  const allShort = items.every(isShortItem);
  return `CONTEXT: The user is referring to these ${items.length} in particular:\n\n${
    items.map((text, index) => formatItem(text, index)).join(allShort ? '\n' : '\n\n')}`;
}
