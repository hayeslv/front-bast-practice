/*
 * @Author: Lvhz
 * @Date: 2020-04-30 15:19:44
 * @Descripttion: 
 */
function sleep(ms=1000){
  const start = Date.now();
  const expire = start + ms;
  while(Date.now() < expire) ;
  return;
}