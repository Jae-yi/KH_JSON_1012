fetch("http://192.168.10.242:3000/comments")
    .then((response) => response.json())
    .then((json) => console.log(json)); //id로 조회

// fetch("http://localhost:3000/posts", {
//     method: "POST", //HTTP 요청 방법
//     body: JSON.stringify({
//         // 전송할 데이터
//         title: "참 쉽죠?",
//         author: "밥 로스",
//     }),
//     headers: {
//         //헤더 값 정의
//         "content-type": "application/json; charset=UTF-8", //content-type 정의
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));   

    // fetch("http://localhost:3000/posts/2", {
    //     method: "PUT", //HTTP 요청 방법
    //     body: JSON.stringify({
    //       //전송할 데이터
    //       id: 2,
    //       title: "아아아, 테스트",
    //       author: "퉁퉁이",
    //     }),
    //     headers: {
    //       //헤더 값 정의
    //       "content-type": "application/json; charset=UTF-8", //content-type 정의
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

// fetch("http://192.168.10.242:3000/posts/2", { method: "DELETE" });