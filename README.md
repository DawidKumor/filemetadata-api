# File Metadata Microservice

A simple backend API that accepts a file upload and returns basic metadata about the uploaded file in JSON format.

Its main purpose is to demonstrate how to handle `multipart/form-data` requests in Node.js using Express and Multer, and how to extract file information such as the original file name, MIME type, and file size in bytes.

## Live Demo
https://filemetadata-api-eyep.onrender.com

> Note: App may take ~30 seconds to load after inactivity because it is hosted on Render's free trial/free tier.

## Features

- Accepts file uploads through a form submission
- Parses `multipart/form-data` requests
- Returns uploaded file metadata as JSON
- Uses Express for the server and Multer for file handling

## Endpoint

- `POST /api/fileanalyse` — accepts a file upload from the form field named `upfile` and returns file metadata

## Example Response

```json
{
  "name": "example.pdf",
  "type": "application/pdf",
  "size": 4655014
}
```

## Technologies Used

- Node.js
- Express
- Multer

## Run Locally

```bash
npm install
node index.js
```
