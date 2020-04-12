/*
Language: Possum
Author: Garry Pettet <contact@garrypettet.com>
*/

function(hljs) {
  return {
    aliases: ['possum'],
    case_insensitive: false,
    keywords: {
      keyword:
        'and as block class constructor downto ' + /* a-d */
        'else elseif enum exit for foreach foreign function' + /* e-f */
        'if import in is not or pass quit repeat return ' + /* i-r */
        'skip static step super then this ' + /* s-t */
        'until var while xor yield ', /* u-y */
      built_in:
        'Boolean Dictionary List Number Object String ', /* b-s */
      literal:
        'false nothing true'
    },
    contains: [    
      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
      hljs.COMMENT(
        '\#',
        '$',
        {
          returnBegin: true,
          contains: [
            {
              className: 'doctag',
              begin: '\'\'\'|<!--|-->',
              contains: [hljs.PHRASAL_WORDS_MODE]
            },
            {
              className: 'doctag',
              begin: '</?', end: '>',
              contains: [hljs.PHRASAL_WORDS_MODE]
            }
          ]
        }
      ),
      hljs.C_NUMBER_MODE,
    ]
  };
}
