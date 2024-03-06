// 1. 이벤트 연결
// on(), off()
/*
$("#area1").on("mouseenter", (event) => {
    $(event.target).css('background-color', 'beige').text("마우스가 올라감");
});*/

// 마우스가 내려갈 때 (mouseleave) -> 배경 색상 : hotpink, 글자는 '마우스가 내려감'

/*
$("#area1").on("mouseleave", (event) => {
    $(event.target).css('background-color', 'hotpink').text("마우스가 내려감");
});*/

/*
$("#area1").on("mouseenter mouseleave", (event) => {
    if(event.type === 'mouseenter'){
    // mouseenter인 경우
    $(event.target).css('background-color', 'beige').text("마우스가 올라감");
    } 
    else if(event.type ===  'mouseleave'){
    // mouseleave인 경우
    $(event.target).css('background-color', 'hotpink').text("마우스가 내려감");
    }
    
});

$("#area1").on("click", (event) => {
    // 배경 색상은 white, 텍스트는 '', 
    // mouseenter, mouseleave 이벤트 제거 (off)
    $(event.target)
    .css('background-color', 'white')
    .text('')
    .off("mouseenter mouseleave");

}); */

$("#area1").on({
    mouseenter : (event) => {
        $(event.target).css('background-color', 'beige').text("마우스가 올라감");
    },
    mouseleave : (event) => {
        $(event.target).css('background-color', 'hotpink').text("마우스가 내려감");
    },
    click : (event) => {
        $(event.target)
        .css('background-color', 'white')
        .text('')
        .off("mouseenter mouseleave");
    }
});


// 2) one - 한번만 실행하는 이벤트
$("#area2").one('click', () => {
    alert("처음이자 마지막으로 (단 한번만) 이벤트 핸들러 실행");
});


// 2. 키보드 이벤트
// 1) keydown, keypress, MediaKeyStatusMap
// keydown: 키보드가 눌려질 때
/*
$("#textarea1").keydown((e) => {
    console.log(`keydown - e.key : ${e.key}, e.keyCOde : ${e.keyCode}`)
});
// keypress : 글자가 입력될 떄
$("#textarea1").keypress((e) => {
    console.log(`keypress - e.key : ${e.key}, e.keyCOde : ${e.keyCode}`);
});

//keyup :  키보드가 떼어질 때
$("#textarea1").keyup((e) => {
    console.log(`keyup - e.key : ${e.key}, e.keyCOde : ${e.keyCode}`);
}); */

// on을 이용해서 한꺼번에 ~
$("#textarea1").on({

    keydown : ((e) => {
        console.log(`keydown - e.key : ${e.key}, e.keyCOde : ${e.keyCode}`)
    }),

    keypress : ((e) => {
        console.log(`keypress - e.key : ${e.key}, e.keyCOde : ${e.keyCode}`);
    }),

    keyup :  ((e) => {
        console.log(`keyup - e.key : ${e.key}, e.keyCOde : ${e.keyCode}`);
    })
});

// 동적으로 글자 수 세기 (keyup) 
$("#textarea2").keyup((e) => {
    let target = $(e.target);
    let currentLength = $(e.target).val().length;
    let maxLength = parseInt($("#maxLength").text());

    if(currentLength > maxLength){
        $(e.target).val(target.val().substr(0,maxLength));
    } else {
        $("#counter").text(currentLength);
    }


    $("#counter").text(currentLength);
    
});


// 동적으로 아이디 조건 확인 (사용가능한 아이디입니다, 사용불가능한 아이디입니다)

$("#userId").keyup((e) => {

    let id = $(e.target).val(); // 제이쿼리 방식
    id = e.target.value; // 자바스크립트 방식

    const regExp = /^[a-z][a-z0-9]{3,11}$/;
  
    if(regExp.test(id)) {
        $("#idCheck").text('사용 가능한 아이디입니다.').css("color", "green");
    } else if (id === "") {
        $("#idCheck").text("");
    } else {
        $("#idCheck").text("사용 불가능한 아이디입니다").css("color", "red");
    }

});

// 3. trigger() 메서드  기능 하나로 여러 기능들을 구현할때
$("#area3").click((e) => {
    let counter = $('#counter2');
    let currentCount = parseInt(counter.text);
    counter.text(++currentCount);

});

$("#btn").click(() =>{
    $("#area3").trigger("click"); // area3가 가지고 있던 기능 자신도 구현
});
