//Question 1

const axios = require('axios');
const fs = require('fs');

// Function to download file
const downloadFile = async (url, filePath) => {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    throw new Error(`Error downloading file: ${error.message}`);
  }
};

const fileUrl = 'https://hrpsolutions.com/wp-content/uploads/2022/05/DYNAMICS-365-OBJECTS.pdf';
const fileName = 'DYNAMICS-365-OBJECTS.pdf';

downloadFile(fileUrl, fileName)
  .then(() => {
    console.log('File downloaded successfully!');
  })
  .catch((error) => {
    console.error('Error downloading file:', error);
  });
