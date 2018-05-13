const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
 
// default options
app.use(fileUpload());
 
app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('./test/uploadTst/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});


app.get('/download', function(req, res){
    //var file = __dirname + '/upload-folder/dramaticpenguin.MOV';
    res.download('./test/uploadTst/filename.jpg'); // Set disposition and send it.
  });

app.all("*", (req,res) => {
    res.sendfile("./test/uploadTst/page.html")
})


app.listen(8000, (err, ret) =>
{
    console.log("listening on port"+8000)
})