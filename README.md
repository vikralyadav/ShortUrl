# ShortUrl

A URL shortener is a service that takes a long URL and converts it into a shorter, more manageable link. This shortened URL redirects users to the original long URL.

## Server Details

The URL shortener service runs on **port 3000**.

## POST Route - /short

### Endpoint

`POST /short`

### Description

This endpoint creates a shortened URL for the provided long URL.

### Request

- **URL:** `/short`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "longUrl": "https://example.com"
  }

  GET Route - /:shortId
Endpoint
GET /:shortId

Description
This endpoint redirects to the original long URL using the generated short URL.

Request
URL: /:shortId
Method: GET
Response
Status: 302 Found
Location: Original long URL

  
