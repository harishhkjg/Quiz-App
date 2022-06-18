var express = require("express");
var App = express();

App.use(express.urlencoded({ extended: false }));
App.use(express.static("public"));

App.get("/", (req, res) => {
  res.send(`   <form action="/result" method="POST" autocomplete="off">
  <h1>C-Quiz</h1>
  <p>
    1. #include &lt stdio.h &gt <br />
    int main () { <br />
    int i;<br />
    for(i=1;i<=10;i+=9)<br />
    printf("%d",i);<br />
    }
  </p>
  <br />
  <input type="text" name="ans1" placeholder="Your Answer" /> <br /><br />
  <p>
    2. #include &lt stdio.h &gt <br />
    int main () { <br />
    int i;<br />
    for(i=1;i<=10;i+=1)<br />
    if(i%7==0) printf("%d",i);<br />
    }
  </p>
  <br />
  <input type="text" name="ans2" placeholder="Your Answer" /> <br /><br />
  <p>
    3. #include &lt stdio.h &gt <br />
    int main () { <br />
    int a=101,b=101;<br />
    printf("%d",a+b);<br />
    }
  </p>
  <br />
  <input type="text" name="ans3" placeholder="Your Answer" /> <br /><br />
  <p>
    4. #include &lt stdio.h &gt <br />
    int main () { <br />
    int a=101,b=101;<br />
    printf("%d",a/b);<br />
    }
  </p>
  <br />
  <input type="text" name="ans4" placeholder="Your Answer" /> <br /><br />
  <p>
    5. #include &lt stdio.h &gt <br />
    int main () { <br />
        int i;<br/>
        for(i=1;i&lt;=10;i+=1){<br/>
        if(i%2==0&&i%5==0)<br/>
        printf("%d",i);}<br/>
    }
  </p>
  <br />
  <input type="text" name="ans5" placeholder="Your Answer" /> <br /><br />
  <button>Submit</button>
</form>`);
});
App.post("/result", (req, res) => {
  var score = 0;
  var i;
  if (req.body.ans1 == 10) {
    score++;
  }
  if (req.body.ans2 == 7) {
    score++;
  }
  if (req.body.ans3 == 202) {
    score++;
  }
  if (req.body.ans4 == 1) {
    score++;
  }
  if (req.body.ans5 == 10) {
    score++;
  }
  if (score <= 2) {
    res.send(`<p style="text-align: center;
  margin-bottom: 20px;
  color: #ff5733;
  font-size: 3.5rem;">Your Score is ${score} </p>
  <a style="text-align: center;
  margin-bottom: 20px;
  color: #3542a;
  font-size: 2rem; text-decoration:none;" href="/">Back to Quiz Page </a>`);
  } else if (score > 2) {
    res.send(`<p style="text-align: center;
  margin-bottom: 20px;
  color: green;
  font-size: 3.5rem;">Your Score is ${score} </p>
  <a style="text-align: center;
  margin-bottom: 20px;
  color: #3542a;font-size:2rem;
   text-decoration:none;" href="/">Back to Quiz Page </a>`);
  }
});

App.listen(3010);
