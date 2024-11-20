/**
 * Handles HTTP GET requests and returns a JSON response with status 'OK'.
 * @param {Request} request - The incoming HTTP request object.
 * @returns {Promise<Response>} - A promise that resolves to a Response object with a JSON body.
 */
export async function GET(request) {
    return new Response(JSON.stringify({ status: 'OK' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
