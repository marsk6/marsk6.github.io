export const stripe = (htmlString: string) => {
  // validation
  if (typeof htmlString !== 'string' || htmlString === '') {
    return ''
  }
  // remove html whitespace unicode
  htmlString = htmlString.replace('&nbsp;', ' ');

  // remove start and end whitespace
  htmlString = htmlString.replace(/(^\s*)|(\s*$)/gi, '');

  // remove multiple whitespace with one
  htmlString = htmlString.replace(/[ ]{2,}/gi, '');

  // remove newline with start whitespace
  htmlString = htmlString.replace(/\n /, '\n');
  // remove &gt; and &lt;
  htmlString = htmlString.replace('&lt;', '').replace('&gt;', '');

  // remove all html tag
  htmlString = htmlString.replace(/(<([^>]+)>)/gi, '');

  // filter word
 return htmlString;
};
