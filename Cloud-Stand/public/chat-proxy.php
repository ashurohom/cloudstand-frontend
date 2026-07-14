<?php
// chat-proxy.php
// This script acts as a backend proxy on Hostinger (PHP) to bypass Cloudflare's browser blocks.

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get the JSON body sent by the React frontend
$input = file_get_contents('php://input');

// Forward the request to Pollinations AI
$ch = curl_init('https://text.pollinations.ai/openai');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Accept: application/json',
    'User-Agent: CloudStand-Hostinger-Proxy'
]);

// Execute the request and capture the response
$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// Handle errors
if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode(['error' => curl_error($ch)]);
} else {
    // Return the response back to the React frontend
    http_response_code($httpcode);
    echo $response;
}

curl_close($ch);
