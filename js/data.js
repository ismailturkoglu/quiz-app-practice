const question_1 = new Question(
  "JavaScript hangi tür bir dildir?",
  {
    A: "İşletim sistemi",
    B: "Veritabanı",
    C: "Tarayıcı",
    D: "Programlama Dili",
  },
  "D",
);

const question_2 = new Question(
  "HTML'in açılımı nedir?",
  {
    A: "Hyper Text Markup Language",
    B: "High Text Machine Language",
    C: "Hyperlink Text Management Language",
    D: "Home Tool Markup Language",
  },
  "A",
);

const question_3 = new Question(
  "CSS ne için kullanılır?",
  {
    A: "Veritabanı oluşturmak",
    B: "Web sayfasının görünümünü düzenlemek",
    C: "Sunucu oluşturmak",
    D: "Programlama dili geliştirmek",
  },
  "B",
);

const question_4 = new Question(
  "JavaScript'te değişken tanımlamak için hangisi kullanılabilir?",
  {
    A: "variable",
    B: "define",
    C: "let",
    D: "new",
  },
  "C",
);

const questionList_1 = [question_1, question_2, question_3, question_4];

const questionList_2 = [
  {
    questionText:
      "JavaScript'te ekrana konsola çıktı vermek için hangi yöntem kullanılır?",
    options: {
      A: "print()",
      B: "console.log()",
      C: "echo()",
      D: "write()",
    },
    rightAnswer: "B",
  },
  {
    questionText:
      "JavaScript'te bir dizinin uzunluğunu öğrenmek için hangi özellik kullanılır?",
    options: {
      A: "size",
      B: "length",
      C: "count",
      D: "index",
    },
    rightAnswer: "B",
  },
  {
    questionText:
      "JavaScript'te bir HTML elementini ID'sine göre seçmek için hangi yöntem kullanılır?",
    options: {
      A: "document.querySelector()",
      B: "document.getElementById()",
      C: "document.getElement()",
      D: "document.selectById()",
    },
    rightAnswer: "B",
  },
  {
    questionText:
      "JavaScript'te bir fonksiyon tanımlamak için hangi anahtar kelime kullanılır?",
    options: {
      A: "function",
      B: "method",
      C: "define",
      D: "func",
    },
    rightAnswer: "A",
  },
];

const questionList_3 = [
  {
    questionText: "JavaScript'te bir koşul belirtmek için hangisi kullanılır?",
    options: {
      A: "if",
      B: "for",
      C: "while",
      D: "switch",
    },
    rightAnswer: "A",
  },
  {
    questionText:
      "JavaScript'te bir dizinin ilk elemanına hangi index ile ulaşılır?",
    options: {
      A: "1",
      B: "0",
      C: "-1",
      D: "first",
    },
    rightAnswer: "B",
  },
  {
    questionText:
      "JavaScript'te bir değerin veri tipini öğrenmek için hangi operatör kullanılır?",
    options: {
      A: "typeof",
      B: "datatype",
      C: "type",
      D: "getType",
    },
    rightAnswer: "A",
  },
  {
    questionText:
      "JavaScript'te bir butona tıklama olayını yakalamak için hangisi kullanılabilir?",
    options: {
      A: "addEventListener()",
      B: "addClick()",
      C: "clickEvent()",
      D: "onButton()",
    },
    rightAnswer: "A",
  },
];

const questionList_4 = [
  {
    questionText:
      "JavaScript'te iki değeri karşılaştırmak için hangisi kullanılabilir?",
    options: {
      A: "=",
      B: "==",
      C: "=>",
      D: "!=",
    },
    rightAnswer: "B",
  },
  {
    questionText:
      "JavaScript'te tekrar eden işlemler için hangisi kullanılabilir?",
    options: {
      A: "loop",
      B: "repeat",
      C: "for",
      D: "iterate",
    },
    rightAnswer: "C",
  },
  {
    questionText:
      "JavaScript'te bir metnin karakter sayısını öğrenmek için hangi özellik kullanılır?",
    options: {
      A: "size",
      B: "count",
      C: "length",
      D: "characters",
    },
    rightAnswer: "C",
  },
];
