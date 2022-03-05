// message
let message = "";

// create image
function img_create(src, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.style.width = "70%";
  img.style.height = "70%";
  img.style.paddingLeft = "40%";
  img.style.paddingRight = "0%";
  document.body.appendChild(img);
}

// main

let but = document.getElementById("submit");
but.onclick = () => {
  // Q.1
  let question1 = document.getElementsByName("1");
  for (i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      let age_group = 90 - i * 10 - 10;
      message +=
        "You have around " +
        age_group +
        " years of your life left. You can definitely still make mistakes and learn from them and be successful. <br><br>";
      break;
    }
  }

  // Q.2
  let question2 = document.getElementsByName("2");
  for (i = 0; i < question2.length; i++) {
    if (question2[i].value === "yes") {
      message +=
        'Just remember that you are not alone. Some of the greatest people in the history were also lonely and still able to make it so big. I would recomment you to checkout the "Alone" page of our site. <br><br>';
      break;
    }
  }

  // Q.3
  let question3 = document.getElementsByName("3");
  for (i = 0; i < question3.length; i++) {
    if (question3[i].value === "no" && question3[i].checked) {
      message +=
        "Rule number 1 of life is to never let anyone, not even your parents, walk you out of your dreams. The first step of massive success is belief in self irrespective of other's opinion of you. <br><br>";
      break;
    }
  }

  // Q.4
  let question4 = document.getElementsByName("4");
  for (i = 0; i < question4.length; i++) {
    if (question4[i].value === "yes" && question4[i].checked) {
      message +=
        "It is never too late. The founder of KFC start KFC at the age of 65!. <br><br>";
      break;
    }
  }

  // Q.5
  let question5 = document.getElementsByName("5");
  for (i = 0; i < question4.length; i++) {
    if (question5[i].value === "yes" && question5[i].checked) {
      message +=
        "Great, you already know what you want to become in life, then why are you scared? You have a direction to go to, just keep exploring it and always make sure to maintain a sense of purpose for whatever you do. <br><br>";
    } else {
      message +=
        "Doing what you want to do is 1000 times better than doing something you don't want to do. It takes times to find out our purpose in life, but I promise that you will find it eventually and you would really look back and thank your past self for never settling for small! <br><br>";
      break;
    }
  }

  // Q.6
  let question6 = document.getElementsByName("6");
  for (i = 0; i < question4.length; i++) {
    if (question6[i].value === "Fame" && question6[i].checked) {
      message +=
        "People often confuse success with fame and money(rich). You can be successful in your own terms and you don't need money or fame to prove that to yourself. If you are happy, have a purpose, and wake up everyday to do what you love then you are successful, that is the definition of success. <br><br>";
    } else if (question6[i].value === "Money" && question6[i].checked) {
      message +=
        "People often confuse success with fame and money(rich). You can be successful in your own terms and you don't need money or fame to prove that to yourself. If you are happy, have a purpose, and wake up everyday to do what you love then you are successful, that is the definition of success. <br><br>";
    }
  }

  // Q.7
  let question7 = document.getElementsByName("7");
  for (i = 0; i < question4.length; i++) {
    if (question7.value === "yes" && question7.checked) {
      message +=
        "Great! You know what you love to do. Just keep doing it and look where and how it can take you to greatness. <br><br>";
    } else {
      message +=
        "It is perfectly ok to not have found your passion right now, Jeff Bezos started out at the at of 30 and still made it so big! Just keep looking, don't settle. <br><br>";
      break;
    }
  }

  // Q.8
  let question8 = document.getElementsByName("8");
  for (i = 0; i < question4.length; i++) {
    if (question8.value === "yes" && question8.checked) {
      message +=
        "You should never compare youself to other. You should look at how far you have come from where you began rahter than comparing with others. That's what ultimately matter. <br><br>";
    }
  }

  // Q.9
  let question9 = document.getElementsByName("9");
  for (i = 0; i < question4.length; i++) {
    if (question9.value === "Quite often" && question9.checked) {
      message +=
        "You have to understand that you are not alone. Even people with great successes still feel low sometime. <br><br>";
    } else if (question9.value === "In between" && question9.checked) {
      message +=
        "It is perfectly normal to have a few days when you feel low. <br>";
    }
  }

  // Q.10
  let question10 = document.getElementsByName("10");
  for (i = 0; i < question4.length; i++) {
    if (question10.value === "Pass Time" && question10.checked) {
      message +=
        "You don't always need motivation work. You should learn to be disciplined and work even on days you feel unmotivated. <br><br>";
    }
  }
  // updating the header
  let header = document.getElementById("intro");
  header.innerHTML = "Your Review:";
  header.style.fontSize = "40px";

  // adding the image
  img_create("Images/success.jpg", "success");

  // removing questions div
  document.getElementById("questions").innerHTML = "";

  // Publishing the message
  document.getElementById("message").innerHTML = message;
};
