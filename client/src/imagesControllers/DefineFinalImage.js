import FinalImages from "../imagesControllers/FinalImages";

const defineFinalImage = (construction, covers, finish) => {
    //SELECT FINAL IMAGE TO SHOW

    let finalImage;
    let con = "";
    let cov = "";
    let fin = "";
    let last = "";

    //Define is front is empty or has covers
    if (construction === "Clean front Construction") {
        con = "f_1";
    } else {
        con = "c_";
        //Define the type of cover
        if (covers === "Open Cover") {cov = "1_"}
        else if (covers === "Trapezoid Cover") {cov = "2_"}
        else if (covers === "Full Cover") {cov = "3_"}
        else if (covers === "Rectangular Cover") {cov = "4_"}
        else {cov = "5_"}
        //Define the finish
        if (finish === "Black Matte") {fin = "1"}
        else if (finish === "Bare Aluminum") {fin = "2"}
        else if (finish === "Brown") {fin = "3"}
        else if (finish === "White Matte") {fin = "4"}
        else{fin = "5"}
    }

    //Assign all final values
    last = con + cov + fin
    let finalImageReturn = FinalImages[last];
    return finalImageReturn;
}

export default defineFinalImage;