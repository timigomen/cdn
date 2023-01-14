if (window.console) {
  Function.prototype.makeMulti = function () {
    let l = new String(this);
    l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
    return l;
  };
  let string = function () {
/*

   ▄██████▄      ███      ▄████████      ▀█████████▄   ▄█        ▄██████▄     ▄██████▄  
  ███    ███ ▀█████████▄ ███    ███        ███    ███ ███       ███    ███   ███    ███ 
  ███    █▀     ▀███▀▀██ ███    █▀         ███    ███ ███       ███    ███   ███    █▀  
 ▄███            ███   ▀ ███              ▄███▄▄▄██▀  ███       ███    ███  ▄███        
▀▀███ ████▄      ███     ███             ▀▀███▀▀▀██▄  ███       ███    ███ ▀▀███ ████▄  
  ███    ███     ███     ███    █▄         ███    ██▄ ███       ███    ███   ███    ███ 
  ███    ███     ███     ███    ███        ███    ███ ███▌    ▄ ███    ███   ███    ███ 
  ████████▀     ▄████▀   ████████▀       ▄█████████▀  █████▄▄██  ▀██████▀    ████████▀  
                                                      ▀                                 
                                                                   
*/
  };
  console.log(string.makeMulti());
  
  console.log('%c Wellcome to Charon Blog ', 'color: #f59f54 ;font-size: 35px;font-weight: bold;text-decoration: underline;');
  
  console.log("%c Warning 警告! %c 你正在使用开发者控制台", "display: inline-block ; background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ","");
  console.log("%c Warning 警告! %c 如果你要使用本站代码", "display: inline-block ; background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ","");
  console.log("%c Warning 警告! %c 请保留代码出处，谢谢！", "display: inline-block ; background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ","");
}
