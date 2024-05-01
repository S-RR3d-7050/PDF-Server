/*
const fs = require('fs');

const pdf = 'C:\\Users\\macga\\OneDrive\\Bureau\\FREELANCE\\PFE-NADA\\PDFS\\public\\';

function copyFileToPublic(originalPath) {
    const fileName = extractPDFname(originalPath)
    const publicPath = pdf + fileName;
    
    fs.copyFile(originalPath, publicPath, (err) => {
      if (err) {
        console.error('Error copying file:', err);
      } else {
        console.log(`File copied to public folder: ${publicPath}`);
      }
    }); 
  }
  
function extractPDFname (path){
      const fileName = path.match(/[^\\]*$/)[0];
      return fileName;
}

copyFileToPublic("C:\\Users\\macga\\Downloads\\SDN_ADC_MM Setup FINAL.pdf")
*/

const path = require('path'); 


const pdf = 'C:/Users/macga/OneDrive/Bureau/FREELANCE/PFE-NADA/PDFS/public/';

let pathpdf = path.normalize(pdf);

console.log(pathpdf);