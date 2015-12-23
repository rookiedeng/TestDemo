'use strict';
process.on('SIGINT', function() {
  console.log('收到 SIGINT 信号。  退出请使用 Ctrl + D ');
});
