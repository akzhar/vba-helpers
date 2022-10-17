const copyText = (text: string): boolean => {
  let isCopied = false;
  const tempInput = document.createElement('textarea');
  tempInput.innerHTML = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    isCopied = document.execCommand('copy');
  // eslint-disable-next-line no-empty
  } catch (err) {}
  document.body.removeChild(tempInput);
  return isCopied;
};

export default copyText;
