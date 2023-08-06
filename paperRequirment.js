function paperRequirments(book1Quantity, book2Quantity, book3Quantity) {
    
    const perBook1Paper = 100;
    const perBook2Paper = 200;
    const perBook3Paper = 300;

    const book1Paper = book1Quantity * perBook1Paper;
    const book2Paper = book2Quantity * perBook2Paper;
    const book3paper = book2Quantity * perBook3Paper;
    
    const totalPaper = book1Paper + book2Paper + book3paper;
    return totalPaper; 

}
const totalPaper = paperRequirments(1, 1, 1);
console.log(totalPaper);


// 01. practice-----------
function paperRequirments(book1Quantity, book2Quantity, book3Quantity) {
    const perBook1Paper = 100;
    const perBook2Paper = 200;
    const perBook3Paper = 300;

    const book1Paper = book1Quantity * perBook1Paper;
    const book2Paper = book2Quantity * perBook2Paper;
    const book3paper = book3Quantity * perBook3Paper;

    const totalPaper = book1Paper + book2Paper + book3paper;
    return totalPaper;
} 
const totalPaper = paperRequirments(2, 3, 5);
console.log(totalPaper);