import axios from 'axios';
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat_id = process.env.TELEGRAM_CHAT_ID;

  // Validate if token and chat_id are available
  if (!token || !chat_id) {
    return NextResponse.json({
      success: false,
      message: "Telegram bot token or chat ID is missing."
    }, { status: 200 });
  }

  try {
    // Prepare the message to be sent
    const message = `New message from ${payload.name}\n\nEmail: ${payload.email}\n\nMessage:\n ${payload.message}\n\n`;

    // Send message to Telegram
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const res = await axios.post(url, {
      chat_id: chat_id,  // Correct placement of chat_id
      text: message      // Correct placement of text
    });

    // Check the response from the API
    if (res.data.ok) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!"
      }, { status: 200 });
    } else {
      // Handle failure from Telegram API
      return NextResponse.json({
        success: false,
        message: "Failed to send message, Telegram API returned an error."
      }, { status: 500 });
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);  // General error logging
    return NextResponse.json({
      message: "Message sending failed!",
      success: false,
    }, { status: 500 });
  }
}
