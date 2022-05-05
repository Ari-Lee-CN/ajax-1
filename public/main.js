console.log('1');

getHTML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','3.html');
    request.onload = () =>{
        console.log('成功了');
        console.log(request.response);
        //创建style标签
        const div = document.createElement('div');
        //填写style标签
        div.innerHTML = request.response;
        //插到头
        document.body.appendChild(div);
    };
    request.onerror = () =>{
        console.log('失败了');
    };
    request.send();
}
//html 是在body上添加而不是在head上
getJS.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','2.js');
    request.onload = () =>{
        console.log('成功了');
        console.log(request.response);
        //创建style标签
        const script = document.createElement('script');
        //填写style标签
        script.innerHTML = request.response;
        //插到头
        document.head.appendChild(script);
    };
    request.onerror = () =>{
        console.log('失败了');
    };
    request.send();
}

/*
getCSS.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','style.css');
    request.onload = () =>{
        console.log('成功了');
        console.log(request.response);
        //创建style标签
        const style = document.createElement('style');
        //填写style标签
        style.innerHTML = request.response;
        //插到头
        document.head.appendChild(style);
    };
    request.onerror = () =>{
        console.log('失败了');
    };
    request.send();
}
*/
getCSS.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET',"/style.css");
    request.onreadystatechange = () =>{
        console.log(request.readyState);
        if(request.readyState === 4){
            console.log("下载完成");
            if(request.status >= 200 && request.status < 300){
                 //创建style标签
            const style = document.createElement('style');
            //填写style标签
            style.innerHTML = request.response;
            //插到头
            document.head.appendChild(style);
            }else{
                alert('加载css失败');
            }
        }
    };
    request.send();
};
getXML.onclick = () =>{
    console.log("1");
    const request = new XMLHttpRequest();
    request.open('GET',"/4.xml");
    request.onreadystatechange = () =>{
        console.log(request.readyState);
        if(request.readyState === '4' && request.status ===200) {
            console.log(request.responseXML);
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim());
        }
    };
    request.send();
};
getJSON.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET',"/5.JSON");
    request.onreadystatechange = () =>{
        if(request.readyState === '4'){
            if(request.status >= 200 && request < 300){
                 //创建style标签
            const object = JSON.parse(request.response);
            myName.textContent = object.name;
        }
    };
    request.send();
};
}
getPage.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET',"/page2.json");
    request.onreadystatechange = () =>{
        if(request.readyState === '4' && request.status === 200){
            const array = JSON.parse(request.response);
            array.forEach(item =>{
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            })
        }
    }
    request.send();
}