const questions = [
    {
      text: "What is the capital of America?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
        { id: 4, text: "Los Angeles", isCorrect: false },
      ],
    },
    {
      text: "Solve the following puzzle?",
      image: "/assets/fruit1.jpg",
      options: [
        { id: 0, text: "100", isCorrect: false },
        { id: 1, text: "250", isCorrect: false },
        { id: 2, text: "300", isCorrect: false },
        { id: 3, text: "175", isCorrect: true },
        { id: 4, text: "500", isCorrect: false },
      ],
    },
    {
      text: "Solve the following puzzle?",
      image: "https://i.ytimg.com/vi/4cOzYxNz7Cg/maxresdefault.jpg",
      options: [
        { id: 0, text: "1000", isCorrect: false },
        { id: 1, text: "2000", isCorrect: false },
        { id: 2, text: "3000", isCorrect: false },
        { id: 3, text: "4000", isCorrect: true },
        { id: 4, text: "5000", isCorrect: false },
      ],
    },
    {
      text: "Solve the following puzzle?",
      image:
        "https://winthropdc.wordpress.com/wp-content/uploads/2020/08/clock-calculator-lightbulb-puzzle.jpg",
      options: [
        { id: 0, text: "50", isCorrect: false },
        { id: 1, text: "20", isCorrect: false },
        { id: 2, text: "25", isCorrect: false },
        { id: 3, text: "32", isCorrect: true },
        { id: 4, text: "22", isCorrect: false },
      ],
    },

   

    // Question with Image
    {
      text: "What fruit is this?",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOr6r3T7sWdXHSO69hb_oaryV2RCF2OEo2g&s",
      options: [
        { id: 0, text: "Apple", isCorrect: true },
        { id: 1, text: "Banana", isCorrect: false },
        { id: 2, text: "Mango", isCorrect: false },
        { id: 3, text: "Pineapple", isCorrect: false },
        { id: 3, text: "Potato", isCorrect: false },
      ],
    },
    {
      text: "Where is the Golden Gate Bridge?",
      image:
        "https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg",
      options: [
        { id: 0, text: "Arizona", isCorrect: false },
        { id: 1, text: "Florida", isCorrect: false },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "California", isCorrect: true },
        { id: 4, text: "Denver", isCorrect: false },
      ],
    },
  ];

  export default questions;