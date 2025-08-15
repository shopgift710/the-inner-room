const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });
const filePath = 'signup_data.xlsx';

// Serve frontend files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', upload.single('photo'), (req, res) => {
    const { name, email, city, insta, MobileNo, bio } = req.body;

    let workbook, worksheet;

    // Create Excel file if not exists
    if (fs.existsSync(filePath)) {
        workbook = XLSX.readFile(filePath);
        worksheet = workbook.Sheets[workbook.SheetNames[0]];
    } else {
        workbook = XLSX.utils.book_new();
        worksheet = XLSX.utils.aoa_to_sheet([["Name", "Email", "City", "Instagram", "Mobile", "Bio"]]);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Signups");
    }

    // Append data
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    data.push([name, email, city, insta, MobileNo, bio]);

    // Update worksheet
    const newWorksheet = XLSX.utils.aoa_to_sheet(data);
    workbook.Sheets[workbook.SheetNames[0]] = newWorksheet;

    // Save file
    XLSX.writeFile(workbook, filePath);

    res.sendFile(path.join(__dirname, 'public', 'thankyou.html'));
});

app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});
