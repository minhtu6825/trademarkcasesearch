async function fetchTM() {
  url = "http://194.195.220.11:8080/https://sellerdefense.cn/allcase-2023/";
  data = await fetch(url);
  html = await data.text();
  start = html.search('<table');
  end = html.search('</table>');
  console.log('start:', start)
  console.log('end:', end)
  let table = html.slice(start, end + 8);
  console.log('table:', table)
  document.getElementById("table-2023").innerHTML = table
}

async function fetchTM2() {
  url = "http://194.195.220.11:8080/https://sellerdefense.cn/allcase-2022/";
  data = await fetch(url);
  html = await data.text();
  start = html.search('<table');
  end = html.search('</table>');
  console.log('start:', start)
  console.log('end:', end)
  let table = html.slice(start, end + 8);
  console.log('table:', table)
  document.getElementById("table-2022").innerHTML = table
}
async function fetchTM3() {
  url = "http://194.195.220.11:8080/https://sellerdefense.cn/allcase-2021/";
  data = await fetch(url);
  html = await data.text();
  start = html.search('<table');
  end = html.search('</table>');
  console.log('start:', start)
  console.log('end:', end)
  let table = html.slice(start, end + 8);
  console.log('table:', table)
  document.getElementById("table-2021").innerHTML = table
}
async function fetchTM4() {
  url = "http://194.195.220.11:8080/https://sellerdefense.cn/allcase-2020/";
  data = await fetch(url);
  html = await data.text();
  start = html.search('<table');
  end = html.search('</table>');
  console.log('start:', start)
  console.log('end:', end)
  let table = html.slice(start, end + 8);
  console.log('table:', table)
  document.getElementById("table-2020").innerHTML = table
}

fetchTM()
fetchTM2()
fetchTM3()
fetchTM4()
let inputValue = "";
function input(e) {
  inputValue = e;
}

function myFunction() {
  console.log(inputValue)
  trs = document.getElementsByTagName('tr')
  // trs[0].classList.add('hidden');
  // console.log('trs.length:', trs.length);
  // console.log('trs:', trs);
  for (let i = 0; i < trs.length; i++) {
    // console.log(trs[i].textContent)
    trs[i].className = '';
    tds = trs[i].getElementsByTagName('td');
    let is_show = false;
    if (tds[2]) {
      tds[2].innerHTML = tds[2].innerHTML.replaceAll('<mark>', '').replaceAll('</mark>', '');
      // console.log(tds[2].textContent)
      let start = tds[2].textContent.toLowerCase().search(inputValue.toLowerCase());

      if (start != -1) {
        console.log('start:', start);
        xx = tds[2].textContent.substring(start, inputValue.length);
        console.log('xx:', xx);
        tds[2].innerHTML = tds[2].textContent.replaceAll(xx, `<mark>${xx}</mark>`);
        is_show = true;
      }
    }
    if (tds[3]) {
      tds[3].innerHTML = tds[3].innerHTML.replaceAll('<mark>', '').replaceAll('</mark>', '');
      // console.log(tds[3].textContent)
      let start = tds[3].textContent.toLowerCase().search(inputValue.toLowerCase());

      if (start != -1) {
        console.log('start:', start);
        xx = tds[3].textContent.substring(start, inputValue.length);
        console.log('xx:', xx);
        tds[3].innerHTML = tds[3].textContent.replaceAll(xx, `<mark>${xx}</mark>`);
        is_show = true;
      }
    }
    if (is_show) {
      trs[i].className = '';
    } else {
      trs[i].className = 'hidden';
    }
    // console.log(tds[3].textContent)
    // ass = trs[i].getElementsByTagName('a');
    // if (ass[0]) {
    //   // console.log(ass[0].text.search(e))
    //   if (ass[0].text.toLowerCase().search(e.toLowerCase()) == -1) {
    //     trs[i].className = 'hidden';
    //   } else {
    //     trs[i].className = "";
    //   }
    // }
    // if (ass.length > 0) {
    //   for (let j = 0; j < ass.length; j++) {
    //     if (ass[j] && ass[j].text.search(e) == -1) {
    //       console.log('trs[i]:', trs[i]);
    //       console.log('ass[j].text:', ass[j].text);
    //       trs[i].className='hidden';
    //     }
    //   }
    // }

    // if (!trs[i].text.search('a')) {
    //   trs[i].classList.add('hidden');
    // }
  }
  // trs.forEach(element => {
  //   if (element.text.search(/e/i)){

  //   }else{
  //     element.classList.add('hidden');
  //   }
  // });
}